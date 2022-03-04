import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../src/components/Nav'
import Oliver from '../src/components/Oliver/Oliver'
import Oscar from '../src/components/Oscar/Oscar'
import Landing from './components/Landing/Landing';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/Oliver" element={<Oliver />} />
          <Route path="/Oscar" element={<Oscar />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
