import FrontPage from './FrontPage';
import Header from './Header';
import { useState, useEffect } from 'react';

function MainPage() {
  // TODO daisyUI theme styling -- gotta implement this
  // https://daisyui.com/theme-generator/

  return (
    <>
      <Header />
      <FrontPage />
    </>
  );
}

export default MainPage;
