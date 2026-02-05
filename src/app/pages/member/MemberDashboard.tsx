import { Navbar } from '../../components/Navbar';
import { Card } from '../../components/Card';

export function MemberDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="member" />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Here's what's happening with your account</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-12">
          <Card 
            title="Total Complaints" 
            value="3" 
            description="1 pending resolution"
          />
          <Card 
            title="Active Bookings" 
            value="2" 
            description="Next booking on Feb 15"
          />
          <Card 
            title="Pending Challans" 
            value="1" 
            description="₹5,000 due"
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-start pb-4 border-b border-gray-100 last:border-0">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">Complaint #123 Resolved</p>
                <p className="text-sm text-gray-500">Your maintenance complaint has been marked as resolved</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            
            <div className="flex items-start pb-4 border-b border-gray-100 last:border-0">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">Booking Approved</p>
                <p className="text-sm text-gray-500">Community Hall booking for Feb 15 has been approved</p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
            
            <div className="flex items-start pb-4 border-b border-gray-100 last:border-0">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-4"></div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">Payment Recorded</p>
                <p className="text-sm text-gray-500">January challan payment has been confirmed</p>
              </div>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}