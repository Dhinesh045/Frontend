import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  let word ="javascript"
  return (
    <div className="App">
     <p>FEEL</p>
     <p>{ word}</p>
    <Home/>
    </div>
  );
}

export default App;
