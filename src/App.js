import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Component/NavbarComponent';
import Hjem from './Pages/Hjem';
import Omoss from './Pages/Omoss';
import PrototypePage from './Pages/Prototypen';
import ScrollToTop from './scrollToTop';
import PageNotFound from './Pages/404';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path='/grupper/D05-23' element={<Hjem />}></Route>
          <Route exact path='/grupper/D05-23/prototype' element={<PrototypePage />}></Route>
          <Route exact path='/grupper/D05-23/omoss' element={<Omoss />}></Route>
          <Route exact path='*' element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
