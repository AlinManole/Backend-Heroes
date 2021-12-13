import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './pages/Hero'
import Powers from './pages/Powers'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter className="container">
    <Nav className="m-3 text-decoration-none" />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/hero" element={<Hero />} />
      <Route exact path="/powers" element={<Powers />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;