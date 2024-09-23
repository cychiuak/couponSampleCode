import logo from './logo.svg';
import './App.css';

import React from 'react';
import Register from './register';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
