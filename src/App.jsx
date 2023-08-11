import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='mensaje'>
      <Navbar></Navbar> 
      <ItemListContainer greeting="Bienvenidos a Aethernum store"></ItemListContainer>     
    </div>
  );
}

export default App;