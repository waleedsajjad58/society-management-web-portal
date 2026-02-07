import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { Badge } from '../../components/Badge';
const handleBookingSubmit = async (formData) => {
  try {
    // Sends the form data to POST /api/bookings
    const response = await API.post('/bookings', formData); 
    alert("Booking submitted successfully!");
    // Refresh the list after success
    setBookings([...bookings, response.data]); 
  } catch (err) {
    alert("Error creating booking: " + err.response.data.message);
  }
};
export function Bookings() {
  const [showForm, setShowForm] = useState(false);
  const [facility, setFacility] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const bookingsData = [
    {
      id: 1,
      facility: 'Community Hall',
      date: '2026-02-15',
      time: '10:00 AM - 2:00 PM',
      status: 'Approved'
    },
    {
      id: 2,
      facility: 'Sports Court',
      date: '2026-02-20',
      time: '6:00 PM - 8:00 PM',
      status: 'Pending'
    }
  ];

  const columns = [
    { header: 'Facility', key: 'facility' },
    { header: 'Date', key: 'date' },
    { header: 'Time', key: 'time' },
    { 
      header: 'Status', 
      key: 'status',
      render: (value: string) => <Badge status={value} />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setFacility('');
    setDate('');
    setTime('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="member" />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
            <p className="text-gray-600">Manage your facility bookings</p>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : 'Request Booking'}
          </Button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">New Booking Request</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Facility</label>
                <select 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={facility}
                  onChange={(e) => setFacility(e.target.value)}
                  required
                >
                  <option value="">Select a facility</option>
                  <option value="Community Hall">Community Hall</option>
                  <option value="Sports Court">Sports Court</option>
                  <option value="Swimming Pool">Swimming Pool</option>
                  <option value="Party Lawn">Party Lawn</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="e.g., 10:00 AM - 2:00 PM"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Submit Request</Button>
            </form>
          </div>
        )}

        <Table columns={columns} data={bookingsData} />
      </div>
    </div>
  );
}