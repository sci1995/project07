import React, { useState, useEffect } from 'react';
import { supabase } from '../client'; // Adjust the path as necessary

function EditCrewmate({ crewmateId, onClose }) {
  const [crewmate, setCrewmate] = useState(null);
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select()
        .eq('id', crewmateId)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error);
      } else {
        setCrewmate(data);
        setName(data.name);
        setSpeed(data.speed);
        setColor(data.color);
      }
    };

    fetchCrewmate();
  }, [crewmateId]);

  const updateCrewmate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('Crewmates')
      .update({ name, speed, color })
      .eq('id', crewmateId);

    if (error) {
      console.error('Error updating crewmate:', error);
    } else {
      onClose();
    }
  };

  const deleteCrewmate = async () => {
    const { error } = await supabase
      .from('Crewmates')
      .delete()
      .eq('id', crewmateId);

    if (error) {
      console.error('Error deleting crewmate:', error);
    } else {
      onClose();
    }
  };

  if (!crewmate) return <p>Loading...</p>;

  return (
    <div>
      <h2>Update Your Crewmate</h2>
      <h3>Current Crewmate Info:</h3>
      <p><strong>Name:</strong> {crewmate.name}</p>
      <p><strong>Speed:</strong> {crewmate.speed} mph</p>
      <p><strong>Color:</strong> {crewmate.color}</p>

      <form onSubmit={updateCrewmate}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter crewmate's name"
            required
          />
        </label>
        <label>
          Speed (mph):
          <input
            type="text"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            placeholder="Enter speed in mph"
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
        <button type="submit">Update Crewmate</button>
        <button type="button" onClick={deleteCrewmate}>Delete Crewmate</button>
      </form>
    </div>
  );
}

export default EditCrewmate;

