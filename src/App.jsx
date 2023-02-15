import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div
      className='App'
      id='bigApp'
    >
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

      <Footer />
    </div>
  );
}

export default App;
