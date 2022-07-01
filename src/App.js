import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('renderizando o filho');
  return <button onClick={() => incrementButton(5)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func.isRequired,
};

// Utilizando Hooks
function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('renderizando o pai');

  return (
    <div className="App">
      <p>teste</p>
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

// Utilizando Classes e States
// class App extends Component {
//   state = {
//     reverse: true,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({
//       reverse: !reverse,
//     });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

//           <button type="button" onClick={this.handleClick}>
//             Reverse
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
