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
  const [user, setUser] = useState(null);
  console.log('🚀 ~ file: App.js ~ line 19 ~ App ~ user', user);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else console.log('no work bc: ', response);
    });
  }, []);

  function onLogin(username) {
    console.log('🚀 ~ file: App.js ~ line 29 ~ onLogin ~ username:', username);
    setUser(username);
    console.log('🚀 ~ file: App.js ~ line 31 ~ onLogin ~ user:', user);
  }

  const [sessionInfo, setSessionInfo] = useState({});
  console.log('🚀 ~ file: App.js ~ line 36 ~ App ~ sessionInfo', sessionInfo);

  useEffect(() => {
    fetch('/show_session')
      .then((r) => r.json())
      .then((thisInfo) => setSessionInfo(thisInfo));
  }, []);

  function onLogout() {
    setUser(null);
  }

  return (
    <>
      <Routes location='/'>
        <Route
          path='/'
          element={<Header user={user} onLogin={onLogin} onLogout={onLogout} />}
        />
      </Routes>
      <Routes>
        <Route
          path='/'
          element={<UsersPage user={user} sessionInfo={sessionInfo} />}
        />
        <Route path='/artists' element={<ArtistsDisplay />} />
        <Route path='/concerts' element={<ConcertsDisplay />} />
        <Route path='/venues' element={<VenuesDisplay />} />
        <Route
          path='/login'
          element={<Login user={user} onLogin={onLogin} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<Header />}>
//           <Route index element={<UsersPage />} />
//           <Route path='/artists' element={<ArtistsDisplay />} />
//           <Route path='/concerts' element={<ConcertsDisplay />} />
//           <Route path='/venues' element={<VenuesDisplay />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='*' element={<NotFound />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;
