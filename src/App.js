import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Rooms from './containers/Rooms';
import Room from './containers/Room';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route path="/rooms/:id" component={Room} />
      </React.Fragment>
    </Router>
  );
}

export default App;
