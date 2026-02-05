import { Navbar } from '../components/Navbar';
import { Link } from 'react-router';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="public" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Society Management Portal
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              A complete digital solution for managing complaints, facility bookings, and maintenance payments efficiently.
            </p>
            <Link 
              to="/login"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Key Features
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-indigo-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">File Complaints</h3>
            <p className="text-gray-600 leading-relaxed">
              Submit and track complaints regarding society issues and maintenance. Get real-time updates on resolution status.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-green-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Facilities</h3>
            <p className="text-gray-600 leading-relaxed">
              Request bookings for community halls, sports facilities, and other amenities. Simple approval process.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">View Challans</h3>
            <p className="text-gray-600 leading-relaxed">
              Check your monthly maintenance dues and payment status. Complete transparency in billing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}