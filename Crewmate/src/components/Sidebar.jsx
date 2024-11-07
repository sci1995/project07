import React from 'react';
import { Link } from 'react-router-dom';
import image01 from './images/97a8e961cf6822f718d060bda2bfb26a.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Game App</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create New Crewmate</Link>
        </li>
        <li>
          <Link to="/gallery">Crewmate Gallery</Link>
        </li>
      </ul>
      <img
        src={image01}
        alt="Sidebar graphic"
        style={{ width: '100%', height: 'auto', marginTop: '20px' }}
        className="sidebar-image"
      />
    </div>
  );
}

export default Sidebar;