import Login from './Login';
import LogoutButton from './LogoutButton';
import ArtistsDisplay from './ArtistDisplay';
import VenuesDisplay from './VenueDisplay';
import ConcertsDisplay from './ConcertDisplay';

// TODO
// create a conditional that holds status
// if user is logged in, don't show the LoginButton
// instead show some other component -> something showing a person's favorite/saved artists, concerts, etc
// maybe pull actual info from ticketmaster API

function Header() {
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
                <a>Artists</a>
              </li>
              <li>
                <a>Venues</a>
              </li>
              <li>
                <a>Concerts</a>
              </li>
            </ul>
          </div>
          <a class='btn btn-ghost normal-case text-xl'>ticketblaster</a>
        </div>
        <div class='navbar-center hidden lg:flex'>
          <ul class='menu menu-horizontal p-0'>
            <li>
              <a class='font-semibold uppercase'>artists</a>
            </li>
            <li>
              <a class='font-semibold uppercase'>Venues</a>
            </li>
            <li>
              <a class='font-semibold uppercase'>Concerts</a>
            </li>
          </ul>
        </div>
        <div class='navbar-end'>
          <a class='px-4 font-semibold uppercase'>ACTIVITY</a>
          <btn class='btn btn-ghost normal-case text-xl' onClick={<Login />}>
            ticketblaster
          </btn>
        </div>
      </div>
    </div>
  );
}

export default Header;
