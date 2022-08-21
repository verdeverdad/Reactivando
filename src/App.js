import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar dark color="primary">

        </Navbar>
        <dic className="container">
          <NavbarBrand href='/'>Destinos de Viaje</NavbarBrand> 
        </dic>
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}


export default App;
