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

// TODO
// <Route /> doesn't actually pass props or render any routes

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<MainPage />} /> */}
        <Route path='/' element={<FrontPage user={user} onLogin={setUser} />} />
        <Route path='/artists' element={<ArtistsDisplay />} />
        <Route path='/concerts' element={<ConcertsDisplay />} />
        <Route path='/venues' element={<VenuesDisplay />} />
        <Route
          path='/login'
          element={<Login user={user} onLogin={setUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
