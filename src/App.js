// App.js
import './App.css';
import Numbers from './Numbers';
import Display from './Display';
import { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState(0); // Manage display value state here

  return (
    <div className="App">
      <Display value={displayValue} /> {/* Display current value */}
      <Numbers setDisplayValue={setDisplayValue} /> {/* Pass the state update function */}
    </div>
  );
}

export default App;
