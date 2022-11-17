import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase"
import { useStateValue } from './StateProvider';
import Perfil from './Perfil';


function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER is: ', authUser)

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={
            [
              <Header />,
              <Home />
            ]
          } />

          <Route path="/checkout" element={
            [
              <Header />,
              <Checkout />
            ]
          } />

          <Route path="/login" element={
            [
              <Login />
            ]
          } />

          <Route path="/perfil" element={
            [
              <Header />,
              <Perfil />
            ]
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
