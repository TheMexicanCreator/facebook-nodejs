import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const user = null;
  return (
    //BEM naming convetion
    <div className="app">
      <Router>
      <Header />
          <div className='app_body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
      </Router>
          <Header />
          <div className='app_body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
    </div>
  );
}

export default App;
