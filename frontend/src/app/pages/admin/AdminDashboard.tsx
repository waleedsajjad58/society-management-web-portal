import { Navbar } from '../../components/Navbar';
import { Card } from '../../components/Card';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="admin" />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Overview of society management activities</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-12">
          <Card 
            title="Total Complaints" 
            value="15" 
            description="5 require attention"
          />
          <Card 
            title="Pending Bookings" 
            value="8" 
            description="Awaiting approval"
          />
          <Card 
            title="Unpaid Challans" 
            value="23" 
            description="₹1,15,000 outstanding"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Complaints</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start pb-3 border-b border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">Elevator Malfunction</p>
                  <p className="text-xs text-gray-500">John Doe (A-101)</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-gray-100">
                <div>
                  <p className="text-sm font-medium text-gray-900">Garbage Collection Issue</p>
                  <p className="text-xs text-gray-500">Jane Smith (B-205)</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-900">Security Gate Issue</p>
                  <p className="text-xs text-gray-500">Robert Wilson (C-303)</p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Pending Actions</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-3"></div>
                <div>
                  <p className="text-sm text-gray-900">8 booking requests need approval</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-1.5 mr-3"></div>
                <div>
                  <p className="text-sm text-gray-900">5 complaints require immediate attention</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-1.5 mr-3"></div>
                <div>
                  <p className="text-sm text-gray-900">23 members have unpaid challans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}