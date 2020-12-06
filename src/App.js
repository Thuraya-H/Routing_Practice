import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Display from './Components/Display';
import DisplayColor from './Components/DisplayColor';

function App() {
  return (
    <div className="container m-5">
        <Router>
            <Home path="/home" />
            <Display path="/:id" />
            <DisplayColor path="/:id/:color/:background" />
        </Router>
    </div>
  );
}

export default App;
