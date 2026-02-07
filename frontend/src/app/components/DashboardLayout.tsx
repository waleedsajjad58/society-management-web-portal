import { useNavigate, Outlet, Link } from 'react-router-dom';

export function DashboardLayout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userInfo') || '{}');

  const handleLogout = () => {
    localStorage.clear(); // Wipe the token and role
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <div className="w-64 bg-indigo-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-indigo-800">
          Society App
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {/* Dashboard is common for both */}
          <Link to={`/${user.role}/dashboard`} className="block p-2 hover:bg-indigo-800 rounded">Dashboard</Link>
          
          {/* Conditional Links based on Role */}
          {user.role === 'admin' ? (
            <>
              <Link to="/admin/complaints" className="block p-2 hover:bg-indigo-800 rounded">Manage Complaints</Link>
              <Link to="/admin/bookings" className="block p-2 hover:bg-indigo-800 rounded">Manage Bookings</Link>
            </>
          ) : (
            <>
              <Link to="/member/complaints" className="block p-2 hover:bg-indigo-800 rounded">My Complaints</Link>
              <Link to="/member/bookings" className="block p-2 hover:bg-indigo-800 rounded">Book Facilities</Link>
            </>
          )}
        </nav>
        <button onClick={handleLogout} className="p-4 bg-red-600 hover:bg-red-700 text-left">
          Logout ({user.name})
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow p-4 flex justify-between">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">{user.role} Portal</h2>
          <span>Welcome, <strong>{user.name}</strong></span>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {/* This is where the specific page content will appear! */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}