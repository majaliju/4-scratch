import '../../src/App.css';
import MainPage from './MainPage';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';
import VenuesDisplay from './VenuesDisplay';
import FrontPage from './FrontPage';
import Login from './Login';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

// TODO user flow (cookies)
// rn working on react-router link and navlink to make sure props pass to each component thru header

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}
        <Route path='/' element={<FrontPage />} />
        <Route path='/artists' element={<ArtistsDisplay />} />
        <Route path='/concerts' element={<ConcertsDisplay />} />
        <Route path='/venues' element={<VenuesDisplay />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
