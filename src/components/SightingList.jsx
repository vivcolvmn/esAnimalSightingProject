import React from 'react';

const SightingList = ({ sightings }) => {
  return (
    <div>
      <h2>All Sightings</h2>
      {sightings.length === 0 ? (
        <p>No sightings to display</p>
      ) : (
        <ul>
          {sightings.map((sighting) => (
            <li key={sighting.id}>
              <p>Nickname: {sighting.nickname}</p>
              <p>Date: {new Date(sighting.date_time).toLocaleString()}</p>
              <p>Location: {sighting.location}</p>
              <p>Healthy: {sighting.healthy ? 'Yes' : 'No'}</p>
              <p>Email: {sighting.email}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SightingList;
