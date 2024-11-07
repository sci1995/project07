import React, { useState } from 'react';
import createImage from './images/il_570xN.2769253056_5occ.webp'; 
import { supabase } from '../client';

function CreateCrewmate({ addCrewmate }) {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add the new crewmate to Supabase
    const { data, error } = await supabase
      .from('Crewmates')
      .insert({ name, speed, color }) // Adjust based on your database schema
      .select();

    if (error) {
      console.error('Error inserting crewmate:', error);
      return;
    }

    // Call the addCrewmate prop function to update local state
    addCrewmate({ name, speed, color });

    // Reset form fields
    setName('');
    setSpeed('');
    setColor('');

    // Redirect or do something after submission
    window.location = "/"; // You can change this as per your routing needs
  };

  return (
    <div>
      <h2>Create New Crewmate</h2>
      <img 
        src={createImage} 
        alt="Create crewmate illustration" 
        className="create-image"  
        style={{ width: '100%', maxWidth: '600px', height: 'auto' }} 
      />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Speed:
          <input
            type="text"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            required
          />
        </label>
        <div>
          <label>Color:</label>
          {['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'].map((colorOption) => (
            <label key={colorOption}>
              <input
                type="radio"
                value={colorOption}
                checked={color === colorOption}
                onChange={(e) => setColor(e.target.value)}
              /> {colorOption}
            </label>
          ))}
        </div>
        <button type="submit">Create Crewmate</button>
      </form>
    </div>
  );
}

export default CreateCrewmate;
