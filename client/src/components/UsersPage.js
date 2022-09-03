import { useEffect, useState } from 'react';

function UsersPage({ user }) {
  return (
    <div>
      <div>
        <h1 class='text-xl font-semibold'>
          saved posts display here probably?
        </h1>
        <h2 class='text-2xl font-semibold'>
          {' '}
          Hey user: {user} , welcome back!
        </h2>
        <button class='btn glass'>testing here </button>
      </div>
    </div>
  );
}
export default UsersPage;
