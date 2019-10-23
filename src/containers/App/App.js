import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../Home/Home';
import Shop from '../Shop/Shop';


function App() {

  return (
    <Router >
    <div className="App">

      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />

    </div>
  </Router>
  );
}

export default App;
