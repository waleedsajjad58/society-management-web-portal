import { useNavigate, Outlet, Link } from 'react-router-dom';

export function DashboardLayout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userInfo') || '{}');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* SIDEBAR - Added z-50 and relative to ensure it is clickable */}
      <aside className="w-64 bg-indigo-900 text-white flex flex-col relative z-50 shadow-xl">
        <div className="p-6 text-2xl font-bold border-b border-indigo-800">
          Society App
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {/* Common Dashboard Link */}
          <Link 
            to={`/${user.role}/dashboard`} 
            className="block p-3 hover:bg-indigo-800 rounded-md transition-colors"
          >
            📊 Dashboard
          </Link>
          
          <div className="pt-4 pb-2 text-xs font-semibold text-indigo-300 uppercase tracking-wider">
            Main Menu
          </div>

          {user.role === 'admin' ? (
            <>
              <Link to="/admin/complaints" className="block p-3 hover:bg-indigo-800 rounded-md transition-colors">
                🛠️ Manage Complaints
              </Link>
              <Link to="/admin/bookings" className="block p-3 hover:bg-indigo-800 rounded-md transition-colors">
                📅 Manage Bookings
              </Link>
              <Link to="/admin/challans" className="block p-3 hover:bg-indigo-800 rounded-md transition-colors">
                💰 Manage Challans
              </Link>
            </>
          ) : (
            <>
              <Link to="/member/complaints" className="block p-3 hover:bg-indigo-800 rounded-md transition-colors">
                📝 My Complaints
              </Link>
              <Link to="/member/bookings" className="block p-3 hover:bg-indigo-800 rounded-md transition-colors">
                🏛️ Book Facilities
              </Link>
              <Link to="/member/challans" className="block p-3 hover:bg-indigo-800 rounded-md transition-colors">
                🧾 My Challans
              </Link>
            </>
          )}
        </nav>

        <button 
          onClick={handleLogout} 
          className="p-4 bg-red-600 hover:bg-red-700 text-left font-semibold transition-colors mt-auto"
        >
          Logout ({user.name})
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col relative z-10">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center no-print">
          <h2 className="text-xl font-semibold text-gray-800 capitalize">
            {user.role} Portal
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 italic">Connected</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">
              {user.name}
            </span>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-50">
          {/* This is where ManageChallans.tsx or Challans.tsx will load */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}