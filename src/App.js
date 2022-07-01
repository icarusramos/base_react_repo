import P from 'prop-types';
import { useEffect, useState } from 'react';
import './App.css';

//salva um componente inteiro na memória
// Utilizando Hooks
function App() {
  console.log('pai renderizou');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div className="posts" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default App;
