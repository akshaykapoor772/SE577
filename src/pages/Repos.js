import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import RepoList from '../pages/RepoList';

function Repo(props) {
  const { repoList } = props;
  return (
    <div>
    <div className='navigator'>
        <Link to="/login" className='button'>Login</Link>
        <Link to="/about" className='button'>Info About Me</Link>
        <Link to="/repos"className='button'>Repos</Link>
        <Link to="/repodetails"className='button'>Repo Details</Link>
      </div>
      <div>
        <RepoList repos={repoList} />
      </div>
    </div>
  );
}

export default Repo;
