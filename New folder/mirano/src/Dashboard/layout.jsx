import React from 'react';
import { Sidebar } from './_components/sidebar/Sidebar';
import { OrgSidebar } from './_components/Org-sidebar';
import { Navbar } from './_components/Navbar';

const Layout = ({ children }) => {
  return (
    <main className="h-full ">
      <Sidebar />
      <div className='pl-[60px] h-full'>
        <div className="flex gap-x-3 h-screen">
            <OrgSidebar/>
            <div className="h-full flex-1">
                {/* Flex Navbar */}
                 <Navbar />
                  {children}
            </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
