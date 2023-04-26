import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function About() {
  return (
    <div>
    <div className='navigator'>
        <Link to="/login" className='button'>Login</Link>
        <Link to="/about" className='button'>Info About Me</Link>
        <Link to="/repos"className='button'>Repos</Link>
        <Link to="/repodetails"className='button'>Repo Details</Link>
      </div>
      <h1 className='title'>About goes here</h1>
    </div>
  );
}

export default About;
