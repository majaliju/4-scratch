/* eslint-disable jsx-a11y/anchor-is-valid */
import Login from './Login';
import LogoutButton from './LogoutButton';
import ArtistsDisplay from './ArtistsDisplay';
import VenuesDisplay from './VenuesDisplay';
import ConcertsDisplay from './ConcertsDisplay';

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
// TODO routes
// ticketblaster routes to FrontPage
// artists to ArtistsDisplay, same for venues and concerts etc
// the loginbutton to LogIn
// the logout button a popup that says 'are you sure?'

function Header() {
  function renderLogin() {
    <Login />;
  }

  return (
    <div>
      <div class='navbar bg-base-100'>
        <div class='navbar-start'>
          <div class='dropdown'>
            <label tabindex='0' class='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabindex='0'
              class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a class='font-semibold uppercase'>Artists</a>
              </li>
              <li>
                <a class='font-semibold uppercase'>Venues</a>
              </li>
              <li>
                <a class='font-semibold uppercase'>Concerts</a>
              </li>
              <li>
                <a class='font-semibold uppercase'>Activity</a>
              </li>
              <li>
                <a class='font-semibold uppercase'>Login</a>
              </li>
            </ul>
          </div>
          <a class='btn btn-ghost normal-case text-xl'>ticketblaster</a>
        </div>
        <div class='navbar-center hidden lg:flex'>
          <ul class='menu menu-horizontal p-0'>
            <li>
              <a class='font-semibold uppercase'>Artists</a>
            </li>
            <li>
              <a class='font-semibold uppercase'>Venues</a>
            </li>
            <li>
              <a class='font-semibold uppercase'>Concerts</a>
            </li>
          </ul>
        </div>
        <div class='navbar-end hidden lg:flex'>
          <a
            class='px-4 btn btn-ghost font-semibold uppercase text-lg'
            onClick={renderLogin}>
            LOGIN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
