import logo from './logo.svg';
import './App.css';
import axios from "axios"
import react, { useState } from 'react'

const App = () => {

  return (
    <div className="App">
      <div className="container">
        {cities.map(i => (
          <div>
            {i} test
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
