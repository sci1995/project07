import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Image from './images/gg.png'; 
import { supabase } from '../client';

function CrewmateInfo() {
  const { id } = useParams(); // Get the crewmate ID from the URL
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error);
        return;
      }
      setCrewmate(data);
    };

    fetchCrewmate();
  }, [id]);

  if (!crewmate) return <div>Loading...</div>;

  return (
    <div>
      <h2>{crewmate.name}</h2>
      <p>Speed: {crewmate.speed} mph</p>
      <p>Color: {crewmate.color}</p>
      {/* Add more details as necessary */}
      <img 
        src={Image} 
        alt="crewmate illustration" 
        className="create-image"  
        style={{ width: '100%', maxWidth: '600px', height: 'auto' }} 
      />
    </div>
  );
}

export default CrewmateInfo;
