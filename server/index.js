import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

const { Pool } = pkg;

// Set up the database pool connection
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(express.json());

// Route to retrieve all sightings with individual nicknames
app.get('/api/sightings', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s.id, s.date_time, s.location, s.healthy, s.email, s.created_at, i.nickname
      FROM sightings s
      JOIN individuals i ON s.individual_id = i.id;
    `);
    res.json(result.rows);
  } catch (error) {
    console.error('Error retrieving sightings:', error);
    res.status(500).json({ error: 'Failed to retrieve sightings' });
  }
});

// Route to add a new sighting
app.post('/api/sightings', async (req, res) => {
  const { dateTime, individualId, location, healthy, email, createdAt } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO sightings (date_time, individual_id, location, healthy, email, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [dateTime, individualId, location, healthy, email, createdAt]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding sighting:', error);
    res.status(500).json({ error: 'Failed to add sighting' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
