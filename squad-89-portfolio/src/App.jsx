import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Journey from './pages/Journey';
import Mentors from './pages/Mentors';
import Students from './pages/Students';
import About from './pages/About';

function App() {
  return (
    <Router>
      <header>
        <h2 className='title'>SQUAD89</h2>
        <div className='list-header'>
          <li className='lists'>
            <ul><Link to="/">Home</Link></ul>
            <ul><Link to="/journey">Journey</Link></ul>
            <ul><Link to="/mentors">Mentors</Link></ul>
            <ul><Link to="/students">Students</Link></ul>
            <ul><Link to="/about">About</Link></ul>
          </li>
        </div>
      </header>
      <Routes>
        <Route path="/" element={
          <div className='main-page'>
            <p className='main-title'>GGU x KALVIUM</p>
            <h1 className='sub-title'>SQUAD 89</h1>
            <h3 className='quote'>Transforming ideas into reality through code and creativity</h3>
            <div className='main-page-button-div'>
              <button className='main-page-button'>View our work</button>
              <button className='learn-more-button'>Learn more</button>
            </div>
          </div>
        } />
        <Route path="/journey" element={<Journey />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;