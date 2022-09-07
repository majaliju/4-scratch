import '../../src/App.css';
import ArtistsDisplay from './ArtistsDisplay';
import ConcertsDisplay from './ConcertsDisplay';
import VenuesDisplay from './VenuesDisplay';
import Login from './Login';
import SignUp from './SignUp';
import NotFound from './NotFound';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UsersPage from './UsersPage';

function App() {
  const [user, setUser] = useState(null);
  const [sessionInfo, setSessionInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else console.log('fetch /me failed due to: ', response);
    });
  }, []);

  function onLogin(username) {
    setUser(username);
    setLoggedIn(true);
    getSession();
  }

  function onLogout() {
    setUser(null);
    setLoggedIn(false);
    setSessionInfo({});
  }

  function getSession() {
    fetch('/show_session')
      .then((r) => r.json())
      .then((thisInfo) => setSessionInfo(thisInfo));
  }

  useEffect(() => {
    getSession();
  }, []);

  return (
    <>
      <Routes location='/'>
        <Route
          path='/'
          element={
            <Header
              user={user}
              onLogin={onLogin}
              onLogout={onLogout}
              loggedIn={loggedIn}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path='/'
          element={
            <UsersPage
              user={user}
              sessionInfo={sessionInfo}
              loggedIn={loggedIn}
            />
          }
        />
        <Route path='/artists' element={<ArtistsDisplay />} />
        <Route path='/concerts' element={<ConcertsDisplay />} />
        <Route path='/venues' element={<VenuesDisplay />} />
        <Route path='/login' element={<Login onLogin={onLogin} />} />
        <Route path='/signup' element={<SignUp onLogin={onLogin} />} />
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
