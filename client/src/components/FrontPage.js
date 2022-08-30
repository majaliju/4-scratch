import Header from './Header';

function FrontPage() {
  return (
    <>
      <Header />
      <div className='App'>
        <header className='App-header'>
          <h1 className='text-5xl font-semibold italic'>Upcoming Dates here</h1>
          <p>Here we show top 10 upcoming dates</p>
          <button class='btn glass'>Click for random concert </button>
        </header>
      </div>
    </>
  );
}

export default FrontPage;
