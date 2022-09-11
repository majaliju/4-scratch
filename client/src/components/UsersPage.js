import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersPage({ user, sessionInfo, loggedIn }) {
  console.log(
    '🚀 ~ file: UsersPage.js ~ line 5 ~ UsersPage ~ sessionInfo',
    sessionInfo
  );

  return (
    <div>
      <div>
        {user !== null && (
          <div
            class='hero min-h-screen'
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}>
            <div class='hero-overlay bg-opacity-60'></div>
            <div class='hero-content text-center text-neutral-content'>
              <div class='max-w-md'>
                <h1 class='mb-5 text-5xl font-bold'>
                  Welcome back, {user.username}!
                </h1>
                <p class='mb-5'>Your sessionID is {sessionInfo.session_id}</p>
                <button class='btn btn-primary'>Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {user === null && (
          <div
            class='hero min-h-screen'
            style={{
              backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
            }}>
            <div class='hero-overlay bg-opacity-60'></div>
            <div class='hero-content text-center text-neutral-content'>
              <div class='max-w-md'>
                <h1 class='mb-5 text-5xl font-bold'>
                  Welcome to ticketblaster
                </h1>
                <p class='mb-5'>
                  The #1 place to find tickets or sell tickets directly to other
                  fans of your favorite artist!
                </p>
                <button class='btn btn-primary'>
                  <Link to='/login'>Login or Sign Up to get started!</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default UsersPage;
