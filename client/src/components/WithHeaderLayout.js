import { Outlet } from 'react-router-dom';
import Header from './Header';

function WithHeaderLayout({ user, onLogin, onLogout }) {
  return (
    <>
      <Header user={user} onLogin={onLogin} onLogout={onLogout} />
      <Outlet />
    </>
  );
}

export default WithHeaderLayout;
