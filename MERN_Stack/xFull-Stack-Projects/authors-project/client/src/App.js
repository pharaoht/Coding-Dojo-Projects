import logo from './logo.svg';
import './App.css';
import {Router, Link} from '@reach/router'
import AllPlayers from './components/AllPlayers';
import AddPlayer from './components/AddPlayer';
import EditPlayer from './components/EditPlayer';

function App() {
  return (
    <div className="App container">
      <div>
        <h3><Link to = '/'>Manage Players</Link></h3>
      </div>
    <Router>
      <AllPlayers path='/'></AllPlayers>
      <AddPlayer path ='/players/addplayer'></AddPlayer>
      <EditPlayer path ='/players/edit/:id'></EditPlayer>
    </Router>
    </div>
  );
}

export default App;
