import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function RepoDetails(props) {
  const { users } = props;
  const [showRepositories, setShowRepositories] = useState(false);

  const handleButtonClick = () => {
    setShowRepositories(!showRepositories);
  };

  return (
    <div className='container'>
      <div className='navigator'>
        <Link to="/login" className='button'>Login</Link>
        <Link to="/about" className='button'>Info About Me</Link>
        <Link to="/repos" className='button'>Repos</Link>
        <Link to="/repodetails" className='button'>Repo Details</Link>
        <Link to="/gist" className='button'>Gist</Link>
      </div>
      <div className='repo-details'>
        <button onClick={handleButtonClick} className='cool-button'>
          {showRepositories ? 'Hide Repositories' : 'Show Repositories'}
        </button>
        {showRepositories && (
          <ul className='users'>
            <h1 className='title'>Repositories of user: akshaykapoor772</h1>
            {users.map((user) => {
              const { id, login, avatar_url, html_url, repositoryName } = user;
              const repositoryName1 = repositoryName || 'Unnamed Repository';
              return (
                <li key={id} className='user-item'>
                  <img src={avatar_url} alt={login} />
                  <div className='repository-list'>
                    <h4>{login}</h4>
                    <a href={html_url} style={{ color: 'rgb(101, 153, 238)' }}>* {repositoryName1}</a>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RepoDetails;
