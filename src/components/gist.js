import React, { useState } from 'react';
import axios from 'axios';
import './Gist.css'; 

const Gist = () => {
  const [gistData, setGistData] = useState(null);
  const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;

  const fetchGistData = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/gists/b4e3761419126785d99e4c38aa0255df',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setGistData(response.data);
    } catch (error) {
      console.error('Error fetching gist data:', error);
    }
  };

  const handleClick = () => {
    fetchGistData();
  };

  return (
    <div>
      <button className="cool-button" onClick={handleClick}>
        Fetch Gist
      </button>
      {gistData && (
        <div>
        <pre>{gistData.files['hello.py'].content}</pre>
        <p>Language: {gistData.files['hello.py'].language}</p>
        </div>
      ) }
    </div>
  );
};

export default Gist;
