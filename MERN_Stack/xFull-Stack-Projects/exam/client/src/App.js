import logo from './logo.svg';
import './App.css';
import {Link, Router} from '@reach/router'
import AllPets from './components/AllPets';
import AddPet from './components/AddPet';
import DetailsPet from './components/DetailsPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App container">
      <h1>Pet Shelter</h1>

      <Router>
        <AllPets path='/'></AllPets>
        <AddPet path='/pet/create'></AddPet>
        <DetailsPet path = '/pet/info/:id'></DetailsPet>
        <EditPet path = '/pet/edit/:id'></EditPet>
      </Router>
    </div>
  );
}

export default App;
