import logo from './logo.svg';
import './App.css';

function App() {
  let word ="javascript"
  return (
    <div className="App">
     <p>FEEL</p>
     <p>{ word}</p>
     <Home word ={word}/>
    </div>
  );
}

export default App;
