import { useState } from 'react';
import './App.css';

function App() {
  let [num, setNum] = useState(0);
  let incr = ()=>{
    if(num < 10){
      setNum(num + 1)
    }
  };
  let decr = ()=>{
    if(num > 0){
      setNum(num - 1)
    }
  };

  return (
    <div className="App">
      <h2>Numero: {num} </h2>
      <button type='button' onClick={decr} >Decrémenter -</button>
      <button type='button' onClick={incr} >Incrémenter +</button>
    </div>
  );
}

export default App;
