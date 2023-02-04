import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={<Hero />}
        ></Route>

        <Route
          path='/about'
          element={<About />}
        ></Route>

        <Route
          path='/portfolio'
          element={<Portfolio />}
        ></Route>
        <Route
          path='/contact'
          element={<Contact />}
        ></Route>
      </Routes>

      {/* <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
