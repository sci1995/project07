import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import CreateCrewmate from './components/Createcrewmate';
import Gallery from './components/Gallery';
import Sidebar from './components/Sidebar';

function App() {
  const [page, setPage] = useState('home');
  const [crewmates, setCrewmates] = useState([]);

  const addCrewmate = (crewmate) => {
    setCrewmates([...crewmates, crewmate]);
  };

  return (
    <div className="app">
      <Sidebar setPage={setPage} />
      <div className="main-content">
        {page === 'home' && <Home />}
        {page === 'create' && <CreateCrewmate addCrewmate={addCrewmate} />}
        {page === 'gallery' && <Gallery crewmates={crewmates} />}
      </div>
    </div>
  );
}

export default App;