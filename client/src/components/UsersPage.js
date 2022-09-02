import { useEffect, useState } from 'react';

function UsersPage({ user }) {
  // this code to test if backend communicates with frontend properly
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);
  return (
    <div>
      <div>
        <h1>Page Count: {count}</h1>
        <h1 class='text-5xl font-semibold'>
          saved posts display here probably?
        </h1>
        <h2 class='text-5xl font-semibold'> Hey {user} welcome back!</h2>
        <p>front page I gotta figure out in general</p>
        <button class='btn glass'>who knows? </button>
      </div>
    </div>
  );
}
export default UsersPage;
