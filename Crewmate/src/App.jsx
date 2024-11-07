import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreateCrewmate from './components/Createcrewmate';
import Gallery from './components/Gallery';
import Sidebar from './components/Sidebar';
import CrewmateInfo from './components/CrewmateInfo';

function App() {
  const [crewmates, setCrewmates] = useState([]);
  const addCrewmate = (crewmate) => {
    setCrewmates([...crewmates, crewmate]);
  };

  return (
    <div className="app">
      <Sidebar  />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCrewmate addCrewmate={addCrewmate} />} />
          <Route path="/gallery" element={<Gallery crewmates={crewmates} />} />
          <Route path="/crewmate/:id" element={<CrewmateInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
