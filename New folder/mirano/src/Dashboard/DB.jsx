import React from 'react';
import Layout from './layout';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <Layout>
      <div className=' h-full'>
        <h2 className="text-2xl">Recommended Templates</h2>
      <div className="flex justify-center items-center">
           <Link to="/Board"> <div class="flex items-center justify-center box-border md:xl:h-72 md:xl:w-80 p-4 border-4 bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-12 text-white">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
</div></Link>
      </div>
<div className="flex justify-center items-center">
  <span>New Board</span>
</div>

      </div>
    </Layout>
  );
};

export default Dashboard;
