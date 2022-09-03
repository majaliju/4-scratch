/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink, Link } from 'react-router-dom';

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

function Header({ user, onLogin }) {
  const something = 'placeholder-string';

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
            {/* the lines below is an example of how I need to render individual login/logout buttons in the dom;
            line below assumes user exists and if so, render the login button */}
            {/* {user && <li>
              <a class='uppercase font-bold'>login</a>
            </li>} */}
            {user === null && (
              <li>
                <a class='uppercase font-bold'>
                  <Link to='/login' state={something}>
                    login
                  </Link>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
