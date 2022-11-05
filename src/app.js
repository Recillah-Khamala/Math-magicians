import React from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/home';
import Quote from './pages/about';
import NavBar from './pages/navbar';

const App = () => (
  <div className="App">
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<Quote />} />
        </Routes>
      </Router>
    </>
  </div>
);

export default App;
