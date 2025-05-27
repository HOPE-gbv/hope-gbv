import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App.tsx';
import AdminLayout from './components/layouts/AdminLayout.tsx';
import LoginPage from './Pages/admin/login.tsx';
import CasesPage from './Pages/admin/cases.tsx';
import ReportsPage from './Pages/admin/reports.tsx'; 
import DashboardPage from './Pages/admin/dashboard/index.tsx'; 
import DocumentsPage from './Pages/admin/dashboard/documents.tsx'; 
import MatchingPage from './Pages/admin/matching/index.tsx'; 
import Home from './Pages/Home.tsx';
import ProbonoPage from './Pages/pro-bono.tsx';
import Faq from './Pages/Faq.tsx';
import DonationPage from './Pages/donate.tsx';
import Community from './Pages/community.tsx';
import About from './Pages/about.tsx';
import './index.css'; 
import Contact from './Pages/contact.tsx';
import EyeWitnessPage from './Pages/eye-witness.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pro-bono',
        element: <ProbonoPage />,
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
      {
        path: 'eye-witness',
        element: <EyeWitnessPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: 'login', 
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
        element: <Outlet />, // Remeber you used Outlet for nested routes
        children: [
          {
            index: true, //* This makes /admin/dashboard render DashboardPage
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
