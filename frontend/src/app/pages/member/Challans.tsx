import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card'; // Assuming path
import { Badge } from '../../components/Badge'; // Using the Badge we fixed

export function Challans() {
  const [myBills, setMyBills] = useState([]);
  const [loading, setLoading] = useState(true);

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

  useEffect(() => {
    const fetchMyBills = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/bills', config);
        setMyBills(data);
      } catch (err) { 
        console.error("Error fetching member bills:", err); 
      } finally {
        setLoading(false);
      }
    };
    fetchMyBills();
  }, []);

  // Calculate total unpaid amount for the header
  const unpaidTotal = myBills
    .filter((b: any) => b.status === 'unpaid')
    .reduce((acc, curr: any) => acc + curr.amount, 0);

  if (loading) return <div className="p-6 text-gray-500 text-center">Loading your challans...</div>;

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">My Challans & Payments</h1>
        <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-lg">
          <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">Outstanding Balance</p>
          <p className="text-xl font-black text-indigo-900">Rs. {unpaidTotal}</p>
        </div>
      </div>

      <div className="grid gap-4">
        {myBills.map((bill: any) => (
          <Card key={bill._id}>
            <div className="flex justify-between items-center p-2">
              <div className="space-y-1">
                <h2 className="font-bold text-gray-800 text-lg">{bill.month} Maintenance Bill</h2>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>ID: {bill._id.substring(0, 8).toUpperCase()}</span>
                  <span>•</span>
                  <span className="font-semibold text-gray-700">Rs. {bill.amount}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                {/* Use the Badge component we added the safety guard to! */}
                <Badge status={bill.status} />
                <span className="text-[10px] text-gray-400">
                  Issued: {new Date(bill.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Card>
        ))}

        {myBills.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400">No maintenance bills have been issued to your account yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}