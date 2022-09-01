import '../../src/App.css';
import Welcome from './Welcome';
import FrontPage from './FrontPage';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

// TODO user flow (cookies)
// user visits page --> they click on GET STARTED
// the firstVisit info becomes a cookie param "user_visited_once" that moves from false to true; this gets saved
// firstVisit  needs update to check first if the cookies[:user_visited_once] exists then if it doesn't exist, to save state about it

// we also have a cookies[:has_account]
// if they have an account, there's a conditional on the header that produces a <Login /> if they do and a <Signup /> if they dont
// if they do have a an account and are logged in, the <Login /> will transform to a <Logout />

function App() {
  // TODO daisyUI theme styling -- gotta implement this
  // https://daisyui.com/theme-generator/

  const [hasAccount, setHasAccount] = useState(false);

  // TODO put a cookie here to show user has been here before

  // TODO gotta configure it so App has a default value of first_visit = true (as is set in routes) then send user to Welcome. Within Welcome, set first_visit to false and hold it there -- always pulling state from the database itself
  const [firstVisit, setFirstVisit] = useState(false);

  const usersFirstTimeHere = (e) => setFirstVisit(!firstVisit);

  return (
    <>
      {firstVisit ? (
        <FrontPage />
      ) : (
        <Welcome
          firstVisit={firstVisit}
          setFirstVisit={setFirstVisit}
          update={usersFirstTimeHere}
        />
      )}
    </>
  );
}

export default App;
