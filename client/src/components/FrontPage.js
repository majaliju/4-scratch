import Header from './Header';
import { useState, useEffect } from 'react';
import UsersPage from './UsersPage';
import Login from './Login';

function FrontPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else console.log('no work bc: ', response);
    });
  }, []);

  console.log('within FrontPage: ', user);
  return (
    <>
      {/* <Header user={user} onLogin={setUser} /> */}
      <UsersPage />
      {/* <Login user={user} onLogin={setUser} /> */}
    </>
  );
}

export default FrontPage;
