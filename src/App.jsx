import React, { useState, useEffect } from 'react';
import SightingList from './components/SightingList';
import SightingForm from './components/SightingForm';
import './App.css'; // Import your CSS file



const App = () => {
  const [sightings, setSightings] = useState([]);
  const [error, setError] = useState(null);

  // Fetch sightings from the server
  useEffect(() => {
    const fetchSightings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/sightings');
        if (!response.ok) {
          throw new Error(`Failed to fetch sightings: ${response.statusText}`);
        }
        const data = await response.json();
        setSightings(data);
      } catch (error) {
        setError('Failed to fetch sightings.');
        console.error('Fetch error:', error);
      }
    };

    fetchSightings();
  }, []);

  // Function to handle adding a new sighting
  const addSighting = async (newSighting) => {
    try {
      console.log('Adding sighting:', newSighting);  // Log the sighting data
      const response = await fetch('http://localhost:5000/api/sightings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSighting),
      });

      // Check if the response is okay
      if (!response.ok) {
        const errorMessage = await response.text();  // Get more details on the error
        throw new Error(`Failed to add sighting: ${errorMessage}`);
      }

      const addedSighting = await response.json();

      // Update the sightings list with the newly added sighting
      setSightings((prevSightings) => [...prevSightings, addedSighting]);

    } catch (error) {
      setError('Failed to add sighting.');
      console.error('Error adding sighting:', error);  // Log the error in detail
    }
  };

  return (
    <div className="App">
      <h1>Animal Sightings</h1>
      {error && <p className="error">{error}</p>}
      <SightingList sightings={sightings} />
      <SightingForm addSighting={addSighting} />
    </div>
  );
};

export default App;
