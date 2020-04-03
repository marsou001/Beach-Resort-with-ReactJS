import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './containers/Navbar';
import Home from './containers/Home';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Home />
      </React.Fragment>
    </Router>
  );
}

export default App;
