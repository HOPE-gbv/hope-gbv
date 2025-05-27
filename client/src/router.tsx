import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App.tsx'; // Import App component
import AdminLayout from './components/layouts/AdminLayout.tsx';
import LoginPage from './Pages/admin/login.tsx';
import CasesPage from './Pages/admin/cases.tsx';
import ReportsPage from './Pages/admin/reports.tsx'; 
import DashboardPage from './Pages/admin/dashboard/index.tsx'; 
import DocumentsPage from './Pages/admin/dashboard/documents.tsx'; 
import MatchingPage from './Pages/admin/matching/index.tsx'; 
import Home from './Pages/Home.tsx';
import Pro from './Pages/Pro-bono.tsx';
import Faq from './Pages/Faq.tsx';
import DonationPage from './Pages/donate.tsx';
import Community from './Pages/community.tsx';
import About from './Pages/about.tsx';
import './index.css'; 
import Contact from './Pages/contact.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Use App component as the main layout
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pro-bono',
        element: <Pro />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'donate',
        element: <DonationPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'login', // Moved login route back here
        element: <LoginPage />,
      },
      {
        path: 'cases',
        element: <CasesPage />,
      },
      {
        path: 'reports',
        element: <ReportsPage />,
      },
      {
        path: 'dashboard',
        element: <Outlet />, // Use Outlet for nested routes
        children: [
          {
            index: true, // This makes /admin/dashboard render DashboardPage
            element: <DashboardPage />,
          },
          {
            path: 'documents',
            element: <DocumentsPage />,
          },
        ],
      },
      {
        path: 'matching',
        element: <MatchingPage />,
      },
    ],
  },
]);

export default router;
