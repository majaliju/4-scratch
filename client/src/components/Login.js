/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

function Login({ user, onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((item) => {
        console.log(item);
      });
    // navigate('/');
  }

  return (
    <div>
      <div className='form-control'>
        <form onSubmit={handleSubmit}>
          <label className='input-group'>
            <label className='username-group'>
              <span class='text uppercase font-extralight'>username</span>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className='password-group'>
              <span class='text uppercase font-extralight'>password</span>
              <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </label>
          <br />
          <button type='submit' class='btn btn-ghostfont-bold uppercase'>
            Login
          </button>
          <br />
          <button>
            <Link to='/'>Go Back</Link>
          </button>
          <button>First time here? Sign up!</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
