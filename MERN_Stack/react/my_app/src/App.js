import logo from './logo.svg';
import './App.css';

function App() {
  const arr = ["Learn React" , "Climb Mt Everest", "Run a Marathon", "Feed the dogs"]
  return (
    <div className="App">
        <h1>Hello Dojo</h1>

    
      <h3>Things to do:</h3>
      {
        arr.map(todo => {
          return <li>{todo}</li>
        })
      }
    </div>
  );
}

export default App;
