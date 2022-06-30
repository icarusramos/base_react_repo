import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// Utilizando Hooks
function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };
  // Utilizando CallBack prevCounter
  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>contador: {counter}</h1>
        <button type="button" onClick={handleClick}>
          reverse
        </button>

        <button type="button" onClick={handleIncrement}>
          Incrementar
        </button>
      </header>
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
