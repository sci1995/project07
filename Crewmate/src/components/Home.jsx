import React from 'react';
import homeImage from './images/wallpapersden.com_crewmate-hd-among-us_4840x2400.jpg'; // Adjust the path as necessary

function Home() {
  return (
    <div>
      <h1>Welcome to the Crew Builder</h1>
      <img src={homeImage} alt="Welcome illustration" className="home-image" style={{ width: '100%', maxWidth: '600px', height: 'auto' }}  /> {/* Image added */}
      <p>Create and customize your own team of players!</p>
    </div>
  );
}

export default Home;