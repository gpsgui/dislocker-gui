import React from 'react';
import logo from './logo.svg';
import './App.css';
import 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onclick={()=>{
          const exec = require('child_process').exec;
          console.log(exec("lsblk | grep /media | grep -oP "sd[a-z]" | awk '{print "/dev/"$1}' | sort | uniq");)
        }}>Listar Volumes</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
