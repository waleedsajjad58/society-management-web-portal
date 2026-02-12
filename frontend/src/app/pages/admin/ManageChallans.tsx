import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

export function ManageChallans() {
  const [bills, setBills] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ user: '', amount: '', month: 'January' });

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

  const fetchData = async () => {
    try {
      const [billsRes, usersRes] = await Promise.all([
        axios.get('http://localhost:5000/api/bills', config),
        axios.get('http://localhost:5000/api/users', config)
      ]);
      setBills(billsRes.data);
      setUsers(usersRes.data);
    } catch (err) { 
      console.error("Fetch error", err); 
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if user and amount exist
    if (!formData.user || !formData.amount) {
      alert("Please select a member and enter an amount");
      return;
    }

    try {
      const payload = {
        user: formData.user,
        amount: Number(formData.amount), // Force conversion to Number
        month: formData.month
      };

      const res = await axios.post('http://localhost:5000/api/bills', payload, config);
      
      if (res.status === 201 || res.status === 200) {
        alert("Bill Issued Successfully!");
        setFormData({ user: '', amount: '', month: 'January' }); // Reset form
        fetchData(); // Refresh list
      }
    } catch (err: any) {
      alert("Error: " + (err.response?.data?.message || "Check console"));
    }
  };

  const markAsPaid = async (id: string) => {
    try {
      await axios.put(`http://localhost:5000/api/bills/${id}`, { status: 'paid' }, config);
      fetchData();
    } catch (err) { alert("Error updating status"); }
  };

  // ADDED: Delete function to clean up broken bills (Rs. 0 bills)
  const deleteBill = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this bill?")) {
      try {
        await axios.delete(`http://localhost:5000/api/bills/${id}`, config);
        fetchData();
      } catch (err) { alert("Error deleting bill"); }
    }
  };

  const filteredBills = bills.filter((bill: any) => 
    bill.user?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Maintenance Billing Control</h1>

      {/* FORM SECTION - Using standard inputs for better reliability */}
      <Card title="Issue New Challan">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">Resident</label>
            <select 
              className="w-full border p-2 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none" 
              value={formData.user}
              onChange={e => setFormData({...formData, user: e.target.value})} 
              required
            >
              <option value="">Select Member</option>
              {users.map((u: any) => <option key={u._id} value={u._id}>{u.name}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">Amount (Rs.)</label>
            <input 
              type="number"
              className="w-full border p-2 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="e.g. 2500"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">Month</label>
            <select 
              className="w-full border p-2 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none" 
              value={formData.month}
              onChange={e => setFormData({...formData, month: e.target.value})}
            >
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <Button type="submit" variant="primary" className="w-full h-[42px]">Issue Bill</Button>
        </form>
      </Card>

      {/* SEARCH & LIST SECTION */}
      <Card title="All Issued Bills">
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="🔍 Search by Resident Name..." 
            className="w-full border p-3 rounded-lg border-gray-200 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wider">
                <th className="p-4 font-bold">Resident</th>
                <th className="p-4 font-bold">Month</th>
                <th className="p-4 font-bold">Amount</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredBills.map((bill: any) => (
                <tr key={bill._id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700">{bill.user?.name || 'Unknown'}</td>
                  <td className="p-4 text-gray-600">{bill.month}</td>
                  <td className="p-4 font-bold text-indigo-600">Rs. {bill.amount}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      bill.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="p-4 flex justify-center gap-2">
                    {bill.status === 'unpaid' && (
                      <Button onClick={() => markAsPaid(bill._id)} variant="outline" size="sm" className="text-xs">
                        Mark Paid
                      </Button>
                    )}
                    <button 
                      onClick={() => deleteBill(bill._id)}
                      className="text-red-500 hover:text-red-700 text-xs font-semibold px-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredBills.length === 0 && (
            <div className="text-center py-10 text-gray-400 italic">No records found.</div>
          )}
        </div>
      </Card>
    </div>
  );
}