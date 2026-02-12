import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Bookings() {
  const [facility, setFacility] = useState('Clubhouse');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (9AM - 12PM)');
  const [myBookings, setMyBookings] = useState([]);

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

  const fetchBookings = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/bookings', config);
      setMyBookings(data);
    } catch (err) { console.error("Fetch failed"); }
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', { facility, date, timeSlot }, config);
      alert("Booking Request Sent!");
      fetchBookings();
    } catch (err) { alert("Booking failed"); }
  };

  useEffect(() => { fetchBookings(); }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Book a Facility</h1>
      
      <form onSubmit={handleBooking} className="bg-white p-6 rounded-lg shadow mb-8 grid gap-4">
        <select value={facility} onChange={(e) => setFacility(e.target.value)} className="p-2 border rounded">
          <option>Clubhouse</option>
          <option>Gym</option>
          <option>Swimming Pool</option>
          <option>Tennis Court</option>
        </select>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="p-2 border rounded" />
        <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="p-2 border rounded">
          <option>Morning (9AM - 12PM)</option>
          <option>Afternoon (1PM - 4PM)</option>
          <option>Evening (5PM - 8PM)</option>
        </select>
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Request Booking</button>
      </form>

      <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
      <div className="space-y-2">
        {myBookings.map((b: any) => (
          <div key={b._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <span className="font-bold">{b.facility}</span> - {new Date(b.date).toLocaleDateString()}
              <p className="text-sm text-gray-500">{b.timeSlot}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${b.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {b.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}