import React from "react";

import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import StartPage from "./pages/StartPage";


function App() {
  return (
    <>

      <Switch>
        <Route exact path="/" >
          <StartPage />
        </Route>
        
        <Route exact path="/home" >
          <Navbar />
          <Home />
        </Route>
        <Route exact path="/about">
          <Navbar />
          <About />
        </Route>
      </Switch>





    </>

  )
}

export default App;
