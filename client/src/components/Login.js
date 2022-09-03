/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login({ user, onLogin }) {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('within handleSubmit: ', username);
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type='submit'>
          {/* <NavLink to='/'>login</NavLink> */} Login
        </button>
      </form>
      {/* <div class='flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100'>
        <div class='mb-8 text-center'>
          <h1 class='my-3 text-4xl font-bold uppercase'>login</h1>
          <p class='text-sm dark:text-gray-400'>
            Your next fun live show starts here!
          </p>
        </div>
        <form
          novalidate=''
          action=''
          class='space-y-12 ng-untouched ng-pristine ng-valid'>
          <div class='space-y-4'>
            <div>
              <input
                type='username'
                name='username'
                id='username'
                placeholder='username'
                class='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'
              />
            </div>
            <div>
              <div class='flex justify-between mb-2'></div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='password'
                class='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'
              />
            </div>
          </div>
          <div class='space-y-2'>
            <div>
              <button
                type='button '
                class='w-full btn btn-glass px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900'>
                Sign in
              </button>
            </div>
            <p class='px-6 text-sm text-center dark:text-gray-400 uppercase'>
              <a
                rel='noopener noreferrer'
                href='#'
                class='hover:underline dark:text-violet-400'>
                Create an account here!
              </a>
            </p>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default Login;
