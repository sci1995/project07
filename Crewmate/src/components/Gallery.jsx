import React, { useEffect, useState } from 'react';
import { supabase } from '../client'; // Ensure this path is correct
import Card from './Card'; // Adjust the import path if necessary
import EditCrewmate from './EditCrewmate'; // Ensure the path is correct

function Gallery() {
  const [crewmates, setCrewmates] = useState([]);
  const [editingCrewmateId, setEditingCrewmateId] = useState(null);

  const fetchCrew = async () => {
    const { data, error } = await supabase.from('Crewmates').select();

    if (error) {
      console.error('Error fetching crewmates:', error);
    } else {
      setCrewmates(data);
    }
  };

  useEffect(() => {
    fetchCrew(); // Call fetchCrew when the component mounts
  }, []);

  const handleEdit = (id) => {
    setEditingCrewmateId(id);
  };

  const handleCloseEdit = () => {
    setEditingCrewmateId(null);
  };

  return (
    <div>
      <h2>Crewmate Gallery</h2>
      <div className="gallery">
        {crewmates.map((crewmate) => (
          <Card key={crewmate.id} crewmate={crewmate} onEdit={handleEdit} />
        ))}
      </div>
  

      {editingCrewmateId && (
        <EditCrewmate
          crewmateId={editingCrewmateId}
          onClose={handleCloseEdit}
        />
      )}
    </div>
  );
}

export default Gallery;
