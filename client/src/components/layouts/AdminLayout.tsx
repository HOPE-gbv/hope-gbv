import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/admin/login';

  if (isLoginPage) {
    return <Outlet />; // Only render the login page without sidebar/header
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-2"><a href="/admin/dashboard" className="block hover:text-gray-300">Dashboard</a></li>
            <li className="mb-2"><a href="/admin/cases" className="block hover:text-gray-300">Cases</a></li>
            <li className="mb-2"><a href="/admin/reports" className="block hover:text-gray-300">Reports</a></li>
            <li className="mb-2"><a href="/admin/matching" className="block hover:text-gray-300">Matching</a></li>
            {/* Removed login link from sidebar as it's handled separately */}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <header className="bg-white shadow p-4 mb-6 rounded-lg">
          <h1 className="text-3xl font-semibold text-gray-800">Admin Section</h1>
        </header>
        <div className="bg-white p-6 rounded-lg shadow">
          <Outlet /> {/* This is where child routes will render */}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
