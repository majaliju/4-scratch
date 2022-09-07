import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/new_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(onLogin);
    navigate('/');
  }

  return (
    <div>
      <div className='form-control'>
        <form onSubmit={handleSubmit}>
          <label className='input-group'>
            <label className='username-entry'>
              <span class='text uppercase font-extralight'>username</span>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className='password-entry'>
              <span class='text uppercase font-extralight'>password</span>
              <input
                type='text'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className='password-confirmation'>
              <span class='text uppercase font-extralight'>
                confirm password
              </span>
              <input
                type='text'
                id='passwordConfirmation'
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </label>
          </label>
          <br />
          <button type='submit' class='btn btn-ghostfont-bold uppercase'>
            Sign up
          </button>
          {/* <br />
          <button class='btn btn-ghostfont-bold uppercase'>
            <Link to='/'>Go Back</Link>
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
