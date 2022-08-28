import '../../src/App.css';
import Header from './Header';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    // https://github.com/saadeghi/theme-change
  }, []);

  return (
    <div>
      <Header />
      <div className='App'>
        <header className='App-header'>
          <h1 className='text-5xl font-semibold italic'>Hello world!</h1>
          <p>Mashlindo testing React with Tailwind here</p>
          <button class='btn glass'>Beautiful Design here</button>
        </header>
      </div>
    </div>
  );
}

export default App;
