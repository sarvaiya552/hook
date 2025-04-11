// src/App.js
import React, { useState } from 'react';

function App() {
  // State to manage counter value
  const [count, setCount] = useState(0);

  // State to manage form input value
  const [inputValue, setInputValue] = useState('');

  // State to manage visibility of the section
  const [isVisible, setIsVisible] = useState(true);

  // Increment and Decrement counter functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // Handle input change function
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Toggle visibility function
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="App" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>React Hooks with State Management</h1>

      {/* Counter Section */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Counter: {count}</h2>
        <button onClick={increment} style={{ padding: '10px', margin: '10px' }}>Increment</button>
        <button onClick={decrement} style={{ padding: '10px', margin: '10px' }}>Decrement</button>
      </div>

      {/* Form Input Section */}
      <div style={{ marginBottom: '20px' }}>
        
      </div>

      {/* Toggle Section */}
      <div>
        
      
          
        
      </div>
    </div>
  );
}

export default App;
