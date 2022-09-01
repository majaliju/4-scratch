import '../../src/App.css';
import Welcome from './Welcome';
import FrontPage from './FrontPage';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

// TODO user flow (cookies)
// user visits page --> they click on GET STARTED
// the isStranger info becomes a cookie param "user_visited_once" that moves from false to true; this gets saved
// isStranger  needs update to check first if the cookies[:user_visited_once] exists then if it doesn't exist, to save state about it

// we also have a cookies[:has_account]
// if they have an account, there's a conditional on the header that produces a <Login /> if they do and a <Signup /> if they dont
// if they do have a an account and are logged in, the <Login /> will transform to a <Logout />

function App() {
  // TODO daisyUI theme styling -- gotta implement this
  // https://daisyui.com/theme-generator/

  const [hasAccount, setHasAccount] = useState(false);

  // TODO put a cookie here to show user has been here before

  // TODO this method isn't working -- gotta use the sessionID here; replace that with sessionID
  const [isStranger, setIsStranger] = useState(true);

  const userStranger = () => {
    fetch('/session_info')
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      {isStranger ? (
        <Welcome
          isStranger={isStranger}
          setIsStranger={setIsStranger}
          update={userStranger}
        />
      ) : (
        <FrontPage />
      )}
    </>
  );
}

export default App;
