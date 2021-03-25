import logo from './logo.svg';
import './App.css';
import {Router, Link,} from '@reach/router';
import AllProducts from './components/AllProducts'

function App() {
  return (
    <div className="App">
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
