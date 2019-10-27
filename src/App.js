import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage'
import Seat from './components/Seat'

function App() {
  return (
    <div className="App">
      <div id="teachersdesk">教卓</div>

      <div id="classroom">
      <header className="App-header">
        <HomepageImage />
        <p>
          First react website.
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

    </div>
  );
}

export default App;
