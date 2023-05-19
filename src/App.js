import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Repos from './pages/Repos';
import RepoDetails from './pages/RepoDetails';
import Gistview from './pages/Gistview';
import './App.css';


function App() {
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5002/get-repo-list');
        const data = await response.json();
        setRepoList(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  

  return (
    <div className="App">
      <Router>  
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/repos" element={<Repos repoList={repoList}/>}/>
          <Route exact path="/repodetails" element={<RepoDetails/>}/>
          <Route exact path="/gist" element={<Gistview/>}/>
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
