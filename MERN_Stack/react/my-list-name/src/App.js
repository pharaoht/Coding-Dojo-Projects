import logo from './logo.svg';
import './App.css';
import RoutingPracticePage1 from './components/RoutingPractice';
import Router from '@reach.router';
import RoutingPracticePage2 from './components/RoutingPracticePag2';
import RoutingPracticePage3 from './components/RoutingPracticePage3';


function App() {
  return (
    <div className="container">
      
      <Router>
        <RoutingPracticePage1 path='/home'/>
        <RoutingPracticePage2 path='/:num'/>

      </Router>
    </div>
  );
}

export default App;
