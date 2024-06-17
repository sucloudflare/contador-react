import React, { useState } from 'react';
import './App.css';

function Contador() {
  const [aumentar, setAumentar] = useState(0);

  const mais = () => {
    setAumentar(aumentar + 1);
  };

  const menos = () => {
    setAumentar(aumentar - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador: {aumentar}</h1>
        <button onClick={mais}>Aumentar</button>
        <button onClick={menos}>Diminuir</button>
      </header>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Contador />
    </div>
  );
}

export default App;
