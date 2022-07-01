import './App.css';
import React, { useState, useEffect } from 'react';

// Utilizando Hooks
function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const eventFn = () => {
    console.log('h1 clicado');
  };

  // //componentDidMount - Excuta apenas 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //componentWillUnmount - Executa apenas 1x
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // //componentDidUpdate - Excuta apenas quando o componente for atualizado
  // useEffect(() => {
  //   console.log('didUpdate');
  // });

  //Com dependencia - Excuta quando mudar a dependencia
  useEffect(() => {
    console.log('c1: ', counter, 'c2: ', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>teste</p>
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <br />
      <h1>Contador: {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 2)}>Incrementar 2</button>
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
