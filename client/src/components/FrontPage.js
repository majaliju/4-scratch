import Header from './Header';
import { useState, useEffect } from 'react';
import UsersPage from './UsersPage';
import Login from './Login';

function FrontPage({ user, onLogin }) {
  return (
    <>
      <Header user={user} onLogin={onLogin} />
      <UsersPage user={user} onLogin={onLogin} />
      <Login user={user} onLogin={onLogin} />
    </>
  );
}

export default FrontPage;
