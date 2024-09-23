import React, { useState } from 'react';

const SightingForm = ({ addSighting }) => {
  const [formData, setFormData] = useState({
    dateTime: '',
    individualId: '',
    location: '',
    healthy: true,
    email: '',
    createdAt: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.dateTime || !formData.individualId || !formData.location || !formData.email || !formData.createdAt) {
      alert('All fields are required!');
      return;
    }

    // Format the date to ISO 8601 if needed
    const formattedDateTime = new Date(formData.dateTime).toISOString();
    const formattedCreatedAt = new Date(formData.createdAt).toISOString();

    // Prepare the new sighting object
    const newSighting = {
      ...formData,
      dateTime: formattedDateTime,
      createdAt: formattedCreatedAt,
    };

    // Call the function to add the sighting
    await addSighting(newSighting);

    // Reset form after submission
    setFormData({
      dateTime: '',
      individualId: '',
      location: '',
      healthy: true,
      email: '',
      createdAt: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Sighting</h2>
      <label>
        Date and Time:
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Individual ID:
        <input
          type="number"
          name="individualId"
          value={formData.individualId}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Healthy:
        <select
          name="healthy"
          value={formData.healthy}
          onChange={handleChange}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Created At:
        <input
          type="datetime-local"
          name="createdAt"
          value={formData.createdAt}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Sighting</button>
    </form>
  );
};

export default SightingForm;
