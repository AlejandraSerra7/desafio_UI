import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Titulo';
import Moneda from './components/Moneda';
import Fecha from './components/Fecha';


class App extends Component{
  
  render(){
      return(
<div>
  <Header/>
  <Moneda/>
  <Fecha/>
  
</div>

      )
}
}
export default App;
