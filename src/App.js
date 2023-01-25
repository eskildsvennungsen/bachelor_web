import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Component/NavbarComponent';
import Hjem from './Pages/Hjem';
import Kontakt from './Pages/Kontakt';
import Omoss from './Pages/Omoss';
import ScrollToTop from './scrollToTop';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Hjem />}></Route>
          <Route exact path='/kontakt' element={<Kontakt />}></Route>
          <Route exact path='/omoss' element={<Omoss />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
