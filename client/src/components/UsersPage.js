import { useEffect, useState } from 'react';

function UsersPage({ user, sessionInfo, loggedIn }) {
  return (
    <div>
      {/* <div>
        {loggedIn === true && (
          <div>
            <h1 class='text-xl font-semibold'>
              Welcome back, {user.username}!{' '}
            </h1>
            <h2 class='text-2xl'> session ID is {sessionInfo.session_id}</h2>
            <h2 class='text-2xl'> user ID is {sessionInfo.user_id}</h2>
          </div>
        )}
      </div>
      <div>
        {loggedIn === false && (
          <div>
            <h1 class='text-xl font-semibold'>
              Log in or sign up to view your shows!
            </h1>
          </div>
        )}
      </div> */}
    </div>
  );
}
export default UsersPage;
