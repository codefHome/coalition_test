import DashboardHeader from './DashboardHeader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-col w-full p-2 md:p-4 lg:p-6 max-w-[1440px] mx-auto'>
      <DashboardHeader />
      <Outlet />
    </div>
  );
};

export default Layout;