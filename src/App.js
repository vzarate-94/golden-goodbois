import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../src/components/Nav'
import Oliver from '../src/components/Oliver/Oliver'
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
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
