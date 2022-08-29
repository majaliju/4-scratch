import '../../src/App.css';
import Welcome from './Welcome';
import FrontPage from './FrontPage';
import { useEffect, useState } from 'react';
import { themeChange } from 'theme-change';

// user visits page
// if they have an account, they see the Front Page (which has the header and the links to our other pages. it's here where we check cookies)
// if they don't, they're sent to the welcome page
// on the Welcome page, they're prompted to login or sign-up

// still gotta decide if I want an initial loading page or just a welcome that has a state set on if the getStarted button was clicked

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    // https://github.com/saadeghi/theme-change
  }, []);

  const [hasAccount, setHasAccount] = useState(false);

  return <>{hasAccount ? <FrontPage /> : <Welcome />}</>;
}

export default App;
