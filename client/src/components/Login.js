/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

//! TAILWIND DOCS FOR STYLING: hovers, form input etc
// https://tailwindcss.com/docs/hover-focus-and-other-states

function Login({ onLogin }) {
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
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => r.json())
      .then((item) => {
        onLogin(item);
      });
    navigate('/');
  }

  return (
    <div class='text-primary-content'>
      <div class='hero min-h-screen bg-base-200'>
        <div class='hero-content flex-col '>
          <div class='text-center lg:text-center'>
            <h1 class='text-5xl font-bold'>LOGIN</h1>
          </div>
          <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <div class='card-body'>
              <form onSubmit={handleSubmit}>
                <div class='form-control'>
                  <label class='label'>
                    <span class='label-text uppercase'>username</span>
                  </label>
                  <input
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div class='form-control'>
                  <label class='label'>
                    <span class='label-text uppercase'>password</span>
                  </label>
                  <input
                    type='text'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class='form-control mt-6'>
                  <button class='btn btn-primary'>Login</button>
                </div>
                <label>
                  <button
                    type='submit'
                    class='btn btn-ghostfont-bold form-control text-secondary-content uppercase'>
                    <Link to='/signup'>First time here? Sign up!</Link>
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// //^ ORIGINAL LOGIN PAGE
// <div className='form-control'>
//   <form onSubmit={handleSubmit}>
//     <label className='input-group'>
//       <label className='username-entry'>
//         <span class='text uppercase font-extralight'>username</span>
//         <input
//           type='text'
//           id='username'
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <label className='password-entry'>
//         <span class='text uppercase font-extralight'>password</span>
//         <input
//           type='text'
//           id='password'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//     </label>
//     <br />
//     <button
//       type='submit'
//       class='btn btn-ghost font-bold bg-primary hover:bg-success uppercase'>
//       Login
//     </button>
//     {/* <button class='btn btn-ghostfont-bold uppercase'>
//     <Link to='/'>Go Back</Link>
//   </button> */}
//     <br />
//     <button class='btn btn-ghostfont-bold bg-secondary text-secondary-content hover:bg-success uppercase'>
//       <Link to='/signup'>First time here? Sign up!</Link>
//     </button>
//   </form>
// </div>;
