import React, { useState, useEffect } from 'react';
import SightingList from './components/SightingList';
import SightingForm from './components/SightingForm';

const App = () => {
  const [sightings, setSightings] = useState([]);
  const [error, setError] = useState(null);

  // Fetch sightings from the server
  useEffect(() => {
    const fetchSightings = async () => {
      try {
        const response = await fetch('/api/sightings');
        const data = await response.json();
        setSightings(data);
      } catch (error) {
        setError('Failed to fetch sightings.');
        console.error(error);
      }
    };

    fetchSightings();
  }, []);

  // Function to handle adding a new sighting
  const addSighting = async (newSighting) => {
    try {
      const response = await fetch('/api/sightings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSighting),
      });
      const addedSighting = await response.json();
      setSightings([...sightings, addedSighting]); // Update state with the new sighting
    } catch (error) {
      setError('Failed to add sighting.');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Animal Sightings</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <SightingList sightings={sightings} />
      <SightingForm addSighting={addSighting} />
    </div>
  );
};

export default App;
