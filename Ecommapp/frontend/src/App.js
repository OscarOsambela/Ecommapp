import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              ECOMMAPP
            </a>
          </div>
          <div>
            <a href="/cart">Carrito</a>
            <a href="/signin">Ingresar</a>
          </div>
          </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">2021 - Oscar Osambela</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;