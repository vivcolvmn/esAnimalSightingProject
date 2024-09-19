import pkg from 'pg';
import speciesData from './speciesData.js';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
});

const insertSpeciesData = async () => {
  try {
    for (const species of speciesData) {
      const { commonName, scientificName, estimatedPopulation, conservationStatus, createdAt, individuals } = species;

      // Insert species
      const speciesResult = await pool.query(
        'INSERT INTO species (common_name, scientific_name, estimated_population, conservation_status, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING id',
        [commonName, scientificName, estimatedPopulation, conservationStatus, createdAt]
      );

      const speciesId = speciesResult.rows[0].id;

      for (const individual of individuals) {
        const { nickname, createdAt: individualCreatedAt, sightings } = individual;

        // Insert individual
        const individualResult = await pool.query(
          'INSERT INTO individuals (nickname, species_id, created_at) VALUES ($1, $2, $3) RETURNING id',
          [nickname, speciesId, individualCreatedAt]
        );

        const individualId = individualResult.rows[0].id;

        for (const sighting of sightings) {
          const { dateTime, location, healthy, email, createdAt: sightingCreatedAt } = sighting;

          // Insert sighting
          await pool.query(
            'INSERT INTO sightings (date_time, individual_id, location, healthy, email, created_at) VALUES ($1, $2, $3, $4, $5, $6)',
            [dateTime, individualId, location, healthy, email, sightingCreatedAt]
          );
        }
      }
    }

    console.log('All species, individuals, and sightings have been inserted into the database.');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    pool.end();
  }
};

insertSpeciesData();
