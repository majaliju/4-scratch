import Header from './Header';
import { useState, useEffect } from 'react';
import UsersPage from './UsersPage';

// TODO frontpage contents
// https://flowbite-react.com/buttons
// wanna implement this button style but issue on render; just doesnt render

function FrontPage({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <UsersPage user={user} />
    </>
  );
}

export default FrontPage;
