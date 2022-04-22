import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sideBar';

function Layout() {
  return (
    <>
      <Navbar />
      <main className="relative top-14 min-h-[calc(100vh-3.5rem)] w-full  ">
        <div className="mx-auto  w-11/12 max-w-5xl ">
          <Outlet />
        </div>
      </main>
      <Sidebar />
    </>
  );
}

export default Layout;
