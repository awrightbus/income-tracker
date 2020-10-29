import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Tracker from './components/Tracker';
import {Switch, Route} from 'react-router-dom';

function App() {

 

  return (
    <div className="app">
      <Navigation/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/tracker' component={Tracker} />
      </Switch>
    </div>
  );
}

export default App;
