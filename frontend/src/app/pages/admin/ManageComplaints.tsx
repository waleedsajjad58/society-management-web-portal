import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function ManageComplaints() {
  const [complaints, setComplaints] = useState([]);
  
  // 1. Get user info for the token
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const config = {
    headers: { Authorization: `Bearer ${userInfo.token}` },
  };

  // 2. ONLY ONE DECLARATION OF THIS FUNCTION
  const fetchAllComplaints = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/complaints', config);
      console.log("Admin Data Received:", data); // Check F12 console for this!
      setComplaints(data);
    } catch (err) {
      console.error("Error fetching complaints", err);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await axios.put(`http://localhost:5000/api/complaints/${id}`, { status: newStatus }, config);
      fetchAllComplaints(); 
    } catch (err) {
      alert("Failed to update status");
    }
  };

  useEffect(() => {
    fetchAllComplaints();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Manage Society Complaints</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-4">Resident</th>
              <th className="p-4">Issue</th>
              <th className="p-4">Category</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.length > 0 ? (
              complaints.map((c: any) => (
                <tr key={c._id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{c.user?.name || 'Resident'}</td>
                  <td className="p-4">
                    <div className="font-bold">{c.title}</div>
                    <div className="text-sm text-gray-500">{c.description}</div>
                  </td>
                  <td className="p-4 text-sm">{c.category}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs ${c.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <select 
                      className="text-sm border rounded p-1"
                      value={c.status}
                      onChange={(e) => updateStatus(c._id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-10 text-center text-gray-500">
                  No complaints found. Members haven't reported anything yet!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}