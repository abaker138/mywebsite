import React from 'react';
import './App.css';
import Body from './Components/Body/Body.js'
import Resources from './Components/Resources/Resources.js'
import ResList from './ResList.js'




function App() {
  return (
    <div className="App">
        <Body />
        <Resources reslist={ResList} />
    </div>
  );
}

export default App;
