import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

  const fetchAllBookings = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/bookings', config);
      setBookings(data);
    } catch (err) {
      console.error("Error fetching bookings", err);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}`, { status: newStatus }, config);
      fetchAllBookings(); // Refresh the list
    } catch (err) {
      alert("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Manage Facility Bookings</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4">Resident</th>
              <th className="p-4">Facility</th>
              <th className="p-4">Date & Slot</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((b: any) => (
                <tr key={b._id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{b.user?.name || 'Resident'}</td>
                  <td className="p-4 font-bold">{b.facility}</td>
                  <td className="p-4">
                    {new Date(b.date).toLocaleDateString()}
                    <div className="text-xs text-gray-500">{b.timeSlot}</div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${
                      b.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <select 
                      className="text-sm border rounded p-1"
                      value={b.status}
                      onChange={(e) => updateStatus(b._id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={5} className="p-10 text-center text-gray-400">No booking requests found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}