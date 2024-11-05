import React from 'react';

function Card({ crewmate, onEdit }) {
  return (
    <div className="crewmate-card">
      <h3>{crewmate.name}</h3>
      <p>Speed: {crewmate.speed}</p>
      <p>Color: {crewmate.color}</p>
      <button onClick={() => onEdit(crewmate.id)}>Edit Crewmate</button>
    </div>
  );
}

export default Card;