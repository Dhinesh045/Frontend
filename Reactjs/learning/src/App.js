import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useState } from 'react';

function App() {
  let word ="javascript"
  // lifecycle hooks
  const[word1,setword1]=useState("update")
  function updateone(){
    let word="java"
    setword1("javascript")
  }
  return (
    <div className="App">
     <p>FEEL</p>
     <input/>
     <p>{ word}</p>
     <p>{word1}</p>
    <Home wors={word}/>
    <button onClick={()=>updateone()}>Click</button>
    
    </div>
  );
}

export default App;
