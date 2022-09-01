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

  // TODO gotta implement a more efficient version of this
  // managed to clear the glitch but still, pageViews is being reset to undefined everytime then being set properly. that's 2 renders, no bueno

  const [pageViews, setPageViews] = useState();

  useEffect(() => {
    fetch('/page_views_check')
      .then((r) => r.json())
      .then((data) => setPageViews(data.page_views));
  }, []);

  console.log('page_views in App: ', pageViews);

  const update = () => {
    setPageViews(pageViews + 1);
  };

  return <>{pageViews < 2 ? <Welcome update={update} /> : <FrontPage />}</>;
}

export default App;
