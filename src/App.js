import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Repos from './pages/Repos';
import RepoDetails from './pages/RepoDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>  
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/repos" element={<Repos/>}/>
          <Route exact path="/repodetails" element={<RepoDetails/>}/>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
