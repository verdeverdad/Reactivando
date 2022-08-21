import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Destinos from './components/destinosComponents';
import './App.css';
import { DESTINOS} from './shared/destinos'

/*function App() {
  return (
    <div className="App">
      
        <Navbar dark color="success">

        </Navbar>
        <dic className="container">
          <NavbarBrand href='/'>Destinos de Viaje</NavbarBrand> 
        </dic>
       
      
     
      <Destinos />
      
    </div>
  );
}
*/

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      destinos: DESTINOS
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Destinos de viaje</NavbarBrand>
          </div>
        </Navbar>

        <Destinos destinos={this.state.destinos}/>
      </div>
    );
  }
}


export default App;
