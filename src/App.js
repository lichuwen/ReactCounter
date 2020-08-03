import React from 'react';
import logo from './logo.svg';
import CounterGroup from './component/GroupCounter/index.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <CounterGroup count={13}/>
    </div>
  );
}

export default App;
