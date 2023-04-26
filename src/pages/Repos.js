import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Repo() {
  return (
    <div>
    <div className='navigator'>
        <Link to="/login" className='button'>Login</Link>
        <Link to="/about" className='button'>Info About Me</Link>
        <Link to="/repos"className='button'>Repos</Link>
        <Link to="/repodetails"className='button'>Repo Details</Link>
      </div>
      <h3 className='title'>List of all my repos</h3>
    </div>
  );
}

export default Repo;
