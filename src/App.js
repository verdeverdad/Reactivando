import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Destinos} from './components/destinosComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar dark color="primary">

        </Navbar>
        <dic className="container">
          <NavbarBrand href='/'>Destinos de Viaje</NavbarBrand> 
        </dic>
        <Destinos></Destinos>
       
      
      </header>
    </div>
  );
}


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}*/


export default App;
