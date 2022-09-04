/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink, Link, useLocation } from 'react-router-dom';
import Login from './Login';

// TODO use a different navbar -- responsive one

// TODO header conditionals (Login/Logout)
// create a conditional that holds status
// if user is logged in, don't show the LoginButton
// great website to show conditionals
// https://bobbyhadz.com/blog/react-onclick-show-component
// 2 conditions: LOGIN or LOGOUT
// within the LOGIN, there's an extra SIGNUP option

// TODO RAILS
// seed with this link: https://teapuddles.medium.com/seeding-a-rails-backend-with-an-external-api-1eb192271005

function Header({ user, onLogin, onLogout }) {
  // const location = useLocation();
  // console.log('🚀 ~ file: Header.js ~ line 21 ~ Header ~ location', location);

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',
    }).then(() => onLogout());
  }

  return (
    <div>
      <div class='navbar bg-base-100'>
        <div class='flex-1'>
          <NavLink to='/'>
            <button class='btn btn-ghost normal-case text-2xl'>
              ticketblaster
            </button>
          </NavLink>
        </div>
        <div class='flex-none'>
          <ul class='menu menu-horizontal p-0'>
            <li>
              <NavLink to='/artists'>
                <button class='uppercase font-bold'>artists</button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/concerts'>
                <button class='uppercase font-bold'>concerts</button>
              </NavLink>
            </li>
            <li>
              <NavLink to='/venues'>
                <button class='uppercase font-bold'>venues</button>
              </NavLink>
            </li>
            {user === null && (
              <li>
                <NavLink class='uppercase font-bold' to='/login'>
                  <button class='uppercase font-bold'>login</button>
                </NavLink>
              </li>
            )}
            {user != null && (
              <li>
                <button class='uppercase font-bold' onClick={handleLogout}>
                  logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
