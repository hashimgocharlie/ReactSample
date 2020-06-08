import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/Greet'
import Welcome from './Components/Welcome'

class App extends Component {
  render() {
    return(
      <div className="App">
        <MyComponent/>
        <Welcome />
      </div>

    );
  }
}

export default App;