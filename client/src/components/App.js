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
    setUser(username);
    getSession();
  }

  const [sessionInfo, setSessionInfo] = useState({});
  console.log('🚀 ~ file: App.js ~ line 36 ~ App ~ sessionInfo', sessionInfo);

  function getSession() {
    fetch('/show_session')
      .then((r) => r.json())
      .then((thisInfo) => setSessionInfo(thisInfo));
  }
  useEffect(() => {
    getSession();
  }, []);

  function onLogout() {
    setUser(null);
    setSessionInfo({});
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

// // WORKING LAYOUT -- GREAT IN CASE OF BACKUP
// return (
//   <>
//     <Routes location='/'>
//       <Route
//         path='/'
//         element={<Header user={user} onLogin={onLogin} onLogout={onLogout} />}
//       />
//     </Routes>
//     <Routes>
//       <Route
//         path='/'
//         element={<UsersPage user={user} sessionInfo={sessionInfo} />}
//       />
//       <Route path='/artists' element={<ArtistsDisplay />} />
//       <Route path='/concerts' element={<ConcertsDisplay />} />
//       <Route path='/venues' element={<VenuesDisplay />} />
//       <Route
//         path='/login'
//         element={<Login user={user} onLogin={onLogin} />}
//       />
//       <Route path='*' element={<NotFound />} />
//     </Routes>
//   </>
// );

// // ORIGINAL
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
