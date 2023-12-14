import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  let word ="javascript"
  // lifecycle hooks
  const[word1,setword1]=useState("update")
  const[word2,setword2]=useState("hii")
  const ref=useRef(0)
  function updateone(){
    let word="java"
    setword1("javascript")
  }
  useEffect(()=>{
    console.log("print")
  },[word2])

  const changeText= useCallback((e)=>{
    console.log(e.target.value)
    setword2(e.target.value)
    // ref.current=ref.current+1
    ref.current=word2
  })
  const Array1=["ArrayConcept","Hello","dhinesh","kumar"]
  
  let [flag,setflag]=useState(false)
  function changeFlag(){
    setflag(!flag)
  }
  return (
    <div className="App">
      <button onClick={()=>changeFlag()}>changeFlag</button>
      {flag== true? (
        <div>
          <p>
            signup
          </p>
          </div>
      )
      :(
        <div>login</div>
      )
      }
      {flag &&(
        <div>
     <p>FEEL</p>
     
     <p>{ word}</p>
     <p>{word1}</p>
     <p>{ref?.current}</p>
     <input on onChange={(e)=>changeText(e)}/>
     <p>{word2}</p>
    <Home wors={word} word1={word}/>
     {Array1.map((e)=>(
      <div>
        <p>{e}</p>
        </div>

     ))}
    <button onClick={()=>updateone()}>Click</button>
   </div>
    )}
    </div>
  );
}

export default App;
