import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/routes';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes/>
     </BrowserRouter>
    </div>
  );
}

export default App;
