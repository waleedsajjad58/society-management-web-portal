import { Link, useNavigate } from 'react-router';

type NavbarVariant = 'public' | 'member' | 'admin';

interface NavbarProps {
  variant: NavbarVariant;
}

export function Navbar({ variant }: NavbarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const renderLinks = () => {
    if (variant === 'public') {
      return (
        <>
          <Link to="/" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Contact
          </Link>
          <Link 
            to="/login" 
            className="ml-4 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
          >
            Login
          </Link>
        </>
      );
    }

    if (variant === 'member') {
      return (
        <>
          <Link to="/member/dashboard" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Dashboard
          </Link>
          <Link to="/member/complaints" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Complaints
          </Link>
          <Link to="/member/bookings" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Bookings
          </Link>
          <Link to="/member/challans" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Challans
          </Link>
          <button
            onClick={handleLogout}
            className="ml-4 text-gray-700 hover:text-red-600 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Logout
          </button>
        </>
      );
    }

    if (variant === 'admin') {
      return (
        <>
          <Link to="/admin/dashboard" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Dashboard
          </Link>
          <Link to="/admin/complaints" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Complaints
          </Link>
          <Link to="/admin/bookings" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Bookings
          </Link>
          <Link to="/admin/challans" className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-lg transition-colors duration-200">
            Challans
          </Link>
          <button
            onClick={handleLogout}
            className="ml-4 text-gray-700 hover:text-red-600 px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Logout
          </button>
        </>
      );
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              Society Portal
            </Link>
          </div>
          <div className="flex items-center gap-1">
            {renderLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
}