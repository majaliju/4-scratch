/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  console.log('username: ', username);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ name: username }),
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
        <button type='submit'>Login</button>
      </form>
      {/* <div class='flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100'>
        <div class='mb-8 text-center'>
          <h1 class='my-3 text-4xl font-bold'>Sign in</h1>
          <p class='text-sm dark:text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          novalidate=''
          action=''
          class='space-y-12 ng-untouched ng-pristine ng-valid'>
          <div class='space-y-4'>
            <div>
              <label for='email' class='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='leroy@jenkins.com'
                class='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'
              />
            </div>
            <div>
              <div class='flex justify-between mb-2'>
                <label for='password' class='text-sm'>
                  Password
                </label>
                <a
                  rel='noopener noreferrer'
                  href='#'
                  class='text-xs hover:underline dark:text-gray-400'>
                  Forgot password?
                </a>
              </div>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='*****'
                class='w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100'
              />
            </div>
          </div>
          <div class='space-y-2'>
            <div>
              <button
                type='button'
                class='w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900'>
                Sign in
              </button>
            </div>
            <p class='px-6 text-sm text-center dark:text-gray-400'>
              Don't have an account yet?
              <a
                rel='noopener noreferrer'
                href='#'
                class='hover:underline dark:text-violet-400'>
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default Login;
