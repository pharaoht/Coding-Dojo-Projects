import logo from './logo.svg';
import './App.css';
import {Router, Link,} from '@reach/router';
import AllProducts from './components/AllProducts'
import OneProduct from './components/OneProduct'
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <div className="App">
      <Router>
          <AllProducts path= "/"></AllProducts>
          <OneProduct path="api/product/:id"></OneProduct>
          <UpdateProduct path="/product-update/:id"></UpdateProduct>

      </Router>
      
    </div>
  );
}

export default App;
