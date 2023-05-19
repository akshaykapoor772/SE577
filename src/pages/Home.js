import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <div className='navigator'>
        <Link to="/login" className='button'>Login</Link>
        <Link to="/about" className='button'>Info About Me</Link>
        <Link to="/repos"className='button'>Repos</Link>
        <Link to="/repodetails"className='button'>Repo Details</Link>
        <Link to="/gist"className='button'>Gist</Link>
      </div>
    </div>
  );
}

export default Home;
