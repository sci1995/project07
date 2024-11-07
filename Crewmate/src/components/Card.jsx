import React from 'react';
import { Link } from 'react-router-dom';

function Card({ crewmate, onEdit }) {
  return (
    <div className="crewmate-card">
      <h3>{crewmate.name}</h3>
      <p>Speed: {crewmate.speed}</p>
      <p>Color: {crewmate.color}</p>
      <Link to={`/crewmate/${crewmate.id}`}>
        <button>View Crewmate</button>
      </Link>
      <button onClick={() => onEdit(crewmate.id)}>Edit Crewmate</button>
    </div>
  );
}

export default Card;
