import { Navigate, useLocation } from 'react-router';

interface ProtectedRouteProps {
  children: JSX.Element;
  roleRequired?: 'admin' | 'member';
}

export function ProtectedRoute({ children, roleRequired }: ProtectedRouteProps) {
  const location = useLocation();
  
  // 1. Grab user data from localStorage
  const userInfo = localStorage.getItem('userInfo');
  const user = userInfo ? JSON.parse(userInfo) : null;

  // 2. Not logged in? Kick them to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. Wrong role? Kick them back to a safe page (like Home)
  if (roleRequired && user.role !== roleRequired) {
    alert("Access Denied: You do not have permission for this section.");
    return <Navigate to="/" replace />;
  }

  // 4. Everything is good? Show the requested page
  return children;
}