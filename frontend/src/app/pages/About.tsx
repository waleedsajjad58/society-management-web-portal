import { Navbar } from '../components/Navbar';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="public" />
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Society Management System</h2>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            This portal is designed to streamline society management operations and improve communication between residents and management.
          </p>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Our system provides tools for managing complaints, facility bookings, and financial transactions efficiently. We believe in transparency, accountability, and seamless digital experience for all society members.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Key Features</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-3"></span>
              <span>Complaint management and tracking system</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-3"></span>
              <span>Facility booking and approval workflow</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-3"></span>
              <span>Challan and payment management</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 mr-3"></span>
              <span>Administrative oversight and controls</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}