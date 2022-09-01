import Header from './Header';
import { useState, useEffect } from 'react';

// TODO frontpage contents

// https://flowbite-react.com/buttons
// wanna implement this button style but issue on render; just doesnt render

function MainPage() {
  // this code to test if backend communicates with frontend properly
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Page Count: {count}</h1>
        <h1 className='text-5xl font-semibold italic'>
          saved posts display here probably?
        </h1>
        <p>front page I gotta figure out in general</p>
        <button class='btn glass'>who knows? </button>
      </div>
    </>
  );
}

export default MainPage;
