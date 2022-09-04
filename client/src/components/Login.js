/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

function Login({ user, onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((thisName) => {
        onLogin(thisName.name);
      });
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <button type='submit'>
          {/* <NavLink to='/'>login</NavLink> */} Login
        </button>
        <br />
        <button>
          <Link to='/'>Go Back</Link>
        </button>
        <button>First time here? Sign up!</button>
      </form>
    </div>
  );
}

export default Login;
