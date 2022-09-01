import Header from './Header';

// TODO frontpage contents

// https://flowbite-react.com/buttons
// wanna implement this button style but issue on render; just doesnt render

function FrontPage() {
  return (
    <>
      <Header />
      <div className='App'>
        <header className='App-header'>
          <h1 className='text-5xl font-semibold italic'>
            saved posts display here probably?
          </h1>
          <p>front page I gotta figure out in general</p>
          <button class='btn glass'>who knows? </button>
        </header>
      </div>
    </>
  );
}

export default FrontPage;
