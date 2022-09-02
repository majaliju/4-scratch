import Welcome from './Welcome';
import FrontPage from './FrontPage';
import { useState, useEffect } from 'react';

// TODO frontpage contents

// https://flowbite-react.com/buttons
// wanna implement this button style but issue on render; just doesnt render

function MainPage() {
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

  console.log('page_views in MainPage: ', pageViews);

  const update = () => {
    setPageViews(pageViews + 1);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  console.log('user in MainPage :', user);

  return (
    <>
      {pageViews < 2 ? (
        <Welcome update={update} />
      ) : (
        <FrontPage user={user} onLogin={setUser} />
      )}
    </>
  );
}

export default MainPage;
