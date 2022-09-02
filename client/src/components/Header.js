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
// TODO activity button purpose?
// instead show some other component -> something showing a person's favorite/saved artists, concerts, etc
// maybe pull actual info from seatgeek API https://platform.seatgeek.com/
// TODO RAILS
// seed with this link: https://teapuddles.medium.com/seeding-a-rails-backend-with-an-external-api-1eb192271005

function Header() {
  return (
    <div>
      <div class='navbar bg-base-100'>
        <div class='flex-1'>
          <a class='btn btn-ghost normal-case text-xl'>daisyUI</a>
        </div>
        <div class='flex-none'>
          <ul class='menu menu-horizontal p-0'>
            <li>
              <a>Item 1</a>
            </li>
            <li tabindex='0'>
              <a>
                Parent
                <svg
                  class='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul class='p-2 bg-base-100'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
