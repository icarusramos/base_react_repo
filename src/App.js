import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

//salva um componente inteiro na memória
const Button = ({ incrementButton }) => {
  return <button onClick={() => incrementButton(5)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func.isRequired,
};

// Utilizando Hooks
function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <p>teste</p>
      <h1>Contador: {counter}</h1>
      {btn}
    </div>
  );
}

export default App;
