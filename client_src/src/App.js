import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <div className="uk-container tm-container-background-light">
      <Main />
    </div>
    <div className="uk-button uk-position-bottom-right">
        <button className="uk-button uk-button-default">
          <i uk-icon="icon: plus"> </i>
        </button>
    </div>
  </div>
)

export default App;
