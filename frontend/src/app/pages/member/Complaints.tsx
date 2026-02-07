import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Complaints() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Maintenance');
  const [myComplaints, setMyComplaints] = useState([]);

  // Get the token from localStorage for the API call
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const config = {
    headers: { Authorization: `Bearer ${userInfo.token}` },
  };

  const fetchComplaints = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/complaints', config);
      setMyComplaints(data);
    } catch (err) {
      console.error("Failed to fetch complaints");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/complaints', { title, description, category }, config);
      alert("Complaint Submitted Successfully!");
      setTitle('');
      setDescription('');
      fetchComplaints(); // Refresh the list
    } catch (err) {
      alert("Failed to submit complaint");
    }
  };

  useEffect(() => { fetchComplaints(); }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Lodge a Complaint</h1>
      
      {/* FORM SECTION */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid gap-4">
          <input 
            type="text" placeholder="Complaint Title" value={title}
            onChange={(e) => setTitle(e.target.value)} required
            className="p-2 border rounded"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
            <option>Maintenance</option>
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Security</option>
          </select>
          <textarea 
            placeholder="Describe your issue..." value={description}
            onChange={(e) => setDescription(e.target.value)} required
            className="p-2 border rounded h-32"
          />
          <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Submit Complaint
          </button>
        </div>
      </form>

      {/* LIST SECTION */}
      <h2 className="text-xl font-semibold mb-4">My Previous Complaints</h2>
      <div className="space-y-4">
        {myComplaints.map((c: any) => (
          <div key={c._id} className="bg-white p-4 rounded shadow border-l-4 border-indigo-500 flex justify-between">
            <div>
              <h3 className="font-bold">{c.title} <span className="text-sm font-normal text-gray-500">({c.category})</span></h3>
              <p className="text-gray-600">{c.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm h-fit ${c.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}