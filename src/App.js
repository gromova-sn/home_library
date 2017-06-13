import React, { Component } from 'react';
import MenuList from "./menu/components/MenuList";

import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuList />
      </div>
    );
  }
}

export default App;
