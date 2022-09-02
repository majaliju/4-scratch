import '../../src/App.css';
import Welcome from './Welcome';
import MainPage from './MainPage';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';
import VenuesDisplay from './VenuesDisplay';
import FrontPage from './FrontPage';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

// TODO user flow (cookies)
// user visits page --> they click on GET STARTED
// the firstVisit info becomes a cookie param "user_visited_once" that moves from false to true; this gets saved
// firstVisit  needs update to check first if the cookies[:user_visited_once] exists then if it doesn't exist, to save state about it

// we also have a cookies[:has_account]
// if they have an account, there's a conditional on the header that produces a <Login /> if they do and a <Signup /> if they dont
// if they do have a an account and are logged in, the <Login /> will transform to a <Logout />

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log('user :', user);

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/frontpage' element={<FrontPage />} />
        <Route path='/artists' element={<ArtistsDisplay />} />
        <Route path='/concerts' element={<ConcertsDisplay />} />
        <Route path='/venues' element={<VenuesDisplay />} />
        <Route path='/login' element={<Login onLogin={setUser} />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
