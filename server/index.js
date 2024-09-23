import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

// Initialize environment variables
dotenv.config();

const { Pool } = pkg;

// Set up the database pool connection
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,  // Use a different name to avoid conflict with the server PORT
});

// Initialize the Express app
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(express.json());

// Route to retrieve all sightings with individual nicknames
app.get('/api/sightings/', async (req, res) => {
    try {
        const { rows: results } = await pool.query(
            `SELECT s.id, s.date_time, s.location, s.healthy, s.email, s.created_at, i.nickname
            FROM sightings s
            JOIN individuals i ON s.individual_id = i.id;`
        );
        res.json(results);
    } catch (error) {
        console.error('Error retrieving sightings:', error.message);  // Log the specific error message
        res.status(500).json({ error: 'Failed to retrieve sightings' });
    }
});

// Route to add a new sighting
app.post('/api/sightings', async (req, res) => {
    const { dateTime, individualId, location, healthy, email, createdAt } = req.body;

    try {
        // Verify that individualId exists in the individuals table
        const individualCheck = await pool.query('SELECT id FROM individuals WHERE id = $1', [individualId]);
        if (individualCheck.rows.length === 0) {
            return res.status(400).json({ error: 'Invalid individual ID' });
        }

        // Insert the new sighting
        const { rows: result } = await pool.query(
            `INSERT INTO sightings (date_time, individual_id, location, healthy, email, created_at)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [dateTime, individualId, location, healthy, email, createdAt]
        );

        const sightingId = result[0].id;

        // Fetch the sighting along with the individual's nickname using a JOIN
        const { rows: sightingWithNickname } = await pool.query(
            `SELECT s.id, s.date_time, s.location, s.healthy, s.email, s.created_at, i.nickname
             FROM sightings s
             JOIN individuals i ON s.individual_id = i.id
             WHERE s.id = $1`,
            [sightingId]
        );

        // Return the newly added sighting with the individual's nickname
        res.status(201).json(sightingWithNickname[0]);

    } catch (error) {
        console.error('Error adding sighting:', error.message);
        res.status(500).json({ error: 'Failed to add sighting' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
