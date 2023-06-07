import React from 'react';
import { Link } from 'react-router-dom';

function RepoList({ repos }) {
    return (
      <div className='repolist'>
        {Array.isArray(repos) && repos.length > 0
          ? repos.map((repo) => (
              <div key={repo.name}>
                <Link to={`/repodetails/${repo.name}`} style={{ color: 'rgb(101 ,153 ,238)'}}>{repo.name}</Link>
              </div>
            ))
          : "No repositories found."}
      </div>
    );
  }

export default RepoList;
