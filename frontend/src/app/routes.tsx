import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { MemberDashboard } from './pages/member/MemberDashboard';
import { Complaints } from './pages/member/Complaints';
import { Bookings } from './pages/member/Bookings';
import { Challans } from './pages/member/Challans';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ManageComplaints } from './pages/admin/ManageComplaints';
import { ManageBookings } from './pages/admin/ManageBookings';
import { ManageChallans } from './pages/admin/ManageChallans';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './components/DashboardLayout';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },

  // MEMBER SECTION
  {
    path: '/member',
    element: (
      <ProtectedRoute roleRequired="member">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: <MemberDashboard /> },
      { path: 'complaints', element: <Complaints /> },
      { path: 'bookings', element: <Bookings /> },
      { path: 'challans', element: <Challans /> },
    ],
  },

  // ADMIN SECTION
  {
    path: '/admin',
    element: (
      <ProtectedRoute roleRequired="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'complaints', element: <ManageComplaints /> },
      { path: 'bookings', element: <ManageBookings /> },
      { path: 'challans', element: <ManageChallans /> },
    ],
  },
]);