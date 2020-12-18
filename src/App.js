import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Rooms from './containers/Rooms';
import Room from './containers/Room';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
