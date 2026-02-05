import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { MemberDashboard } from './pages/member/MemberDashboard';
import { Complaints } from './pages/member/Complaints';
import { Bookings } from './pages/member/Bookings';
import { Challans } from './pages/member/Challans';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ManageComplaints } from './pages/admin/ManageComplaints';
import { ManageBookings } from './pages/admin/ManageBookings';
import { ManageChallans } from './pages/admin/ManageChallans';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/member/dashboard',
    Component: MemberDashboard,
  },
  {
    path: '/member/complaints',
    Component: Complaints,
  },
  {
    path: '/member/bookings',
    Component: Bookings,
  },
  {
    path: '/member/challans',
    Component: Challans,
  },
  {
    path: '/admin/dashboard',
    Component: AdminDashboard,
  },
  {
    path: '/admin/complaints',
    Component: ManageComplaints,
  },
  {
    path: '/admin/bookings',
    Component: ManageBookings,
  },
  {
    path: '/admin/challans',
    Component: ManageChallans,
  },
]);
