import '../../src/App.css';
import MainPage from './MainPage';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';
import VenuesDisplay from './VenuesDisplay';
import FrontPage from './FrontPage';
import Login from './Login';
import NotFound from './NotFound';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UsersPage from './UsersPage';

// TODO
// <Route /> doesn't actually pass props or render any routes

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<UsersPage />} />
          <Route path='/artists' element={<ArtistsDisplay />} />
          <Route path='/concerts' element={<ConcertsDisplay />} />
          <Route path='/venues' element={<VenuesDisplay />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
