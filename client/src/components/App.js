import '../../src/App.css';
import Welcome from './Welcome';
import FrontPage from './FrontPage';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

// TODO
// USER FLOW
// user visits page --> they click on GET STARTED
// the GETSTARTED info becomes a cookie param "user_visited_once" that moves from false to true; this gets saved
// getStarted  needs update to check first if the cookies[:user_visited_once] exists then if it doesn't exist, to save state about it

// we also have a cookies[:has_account]
// if they have an account, there's a conditional on the header that produces a <Login /> if they do and a <Signup /> if they dont
// if they do have a an account and are logged in, the <Login /> will transform to a <Logout />

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    // https://github.com/saadeghi/theme-change
  }, []);

  const [hasAccount, setHasAccount] = useState(false);
  const [getStarted, setGetStarted] = useState(false);

  return (
    <>
      {getStarted ? (
        <FrontPage />
      ) : (
        <Welcome getStarted={getStarted} setGetStarted={setGetStarted} />
      )}
    </>
  );
}

export default App;
