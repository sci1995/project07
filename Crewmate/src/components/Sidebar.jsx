import React from 'react';
import image01 from './images/97a8e961cf6822f718d060bda2bfb26a.png'; 

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Game App</h2>
      <ul>
        <li onClick={() => setPage('home')}>Home</li>
        <li onClick={() => setPage('create')}>Create New Crewmate</li>
        <li onClick={() => setPage('gallery')}>Crewmate Gallery</li>
      </ul>
      <img src={image01} alt="Sidebar graphic"  style={{ width: '100%', height: 'auto', marginTop: '20px' }} className="sidebar-image" /> {/* Add image */}
    </div>
  );
}

export default Sidebar;