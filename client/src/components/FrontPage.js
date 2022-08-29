import Header from './Header';

function FrontPage() {
  return (
    <>
      <Header />
      <div className='App'>
        <header className='App-header'>
          <h1 className='text-5xl font-semibold italic'>Hello world!</h1>
          <p>Mashlindo testing React with Tailwind here</p>
          <button class='btn glass'>Beautiful Design here</button>
        </header>
      </div>
    </>
  );
}

export default FrontPage;
