import React from 'react';
import logo from './logo.svg';
import Counter from './component/Counter/index.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* new Array(3).fill(0).map(() => ) */}
      <Counter/>
    </div>
  );
}

export default App;
