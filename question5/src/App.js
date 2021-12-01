import logo from './logo.svg';
import './App.css';
import axios from "axios"
import react, { useState } from 'react'
import SearchCity from './search/searchCIty';
const App = () => {

  return (
    <div className="App">
      <div className="container">
        <SearchCity />
      </div>
    </div>
  );
}

export default App;
