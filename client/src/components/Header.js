/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from 'react-router-dom';

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

function Header() {
  return (
    <div>
      <div class='navbar bg-base-100'>
        <div class='flex-1'>
          <a class='btn btn-ghost normal-case text-2xl'>ticketblaster</a>
        </div>
        <div class='flex-none'>
          <ul class='menu menu-horizontal p-0'>
            <li>
              <a class='uppercase font-bold'>artist</a>
            </li>
            <li>
              <a class='uppercase font-bold'>concerts</a>
            </li>
            <li>
              <a class='uppercase font-bold'>venues</a>
            </li>
            <li>
              <a class='uppercase font-bold'>login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
