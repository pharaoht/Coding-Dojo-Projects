import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import StarWarsAPI from './components/StarwarsAPI';





function App() {
  return (
   
    <Router>
      <StarWarsAPI path=''/>
    </Router>
  );
}

export default App;
