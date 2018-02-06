import React, { Component } from 'react';
import Welcome from './Welcome/Welcome';
import Styles from './App.css';


class App extends Component {
  render() {
    return (
      <div className={Styles.App}>
        <Welcome />
      </div>
    );
  }
}

export default App;
