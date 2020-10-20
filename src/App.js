import React from 'react';
import logo from './logo.svg';
import './App.css';

import User from './container/user';
import Products from './container/product';
import Login from './container/login';


class App extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <div className="App">
        <header className="header">
          <div className='header__container'>
                  <h1 className='logo'>Demo</h1>
                  <User></User>
          </div>        
        </header>
        <main className='content'>
          <Login></Login>
          <Products></Products>
        </main>
      </div>
    );
  }
}

export default App;
