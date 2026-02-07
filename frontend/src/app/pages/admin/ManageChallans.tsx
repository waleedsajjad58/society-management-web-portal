import { useEffect, useState } from 'react';
import API from '../../api';
import { Table } from '../../components/Table';
import { Button } from '../../components/Button';

export function ManageChallans() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBills = async () => {
    try {
      setLoading(true);
      // Changed from '/bills' to '/bill' to match your server.js mount point
      const { data } = await API.get('/bills'); 
      setBills(data);
    } catch (err) {
      console.error("Error fetching bills:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      // Endpoint updated to match your backend PUT /api/bill/:id
      await API.put(`/bill/${id}`, { status });
      
      // Refresh UI locally for a fast response
      setBills(bills.map((b: any) => (b._id === id ? { ...b, status } : b)));
      alert(`Bill marked as ${status}`);
    } catch (err) {
      alert("Failed to update bill status");
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Society Challans</h1>
        <Button onClick={fetchBills} variant="outline" size="sm">Refresh List</Button>
      </div>

      {loading ? (
        <p>Loading challans...</p>
      ) : (
        <Table 
          columns={[
            { 
              header: 'Resident', 
              key: 'user', 
              render: (val) => val?.name || 'Unknown User' // Safety check if name is missing
            },
            { 
              header: 'Amount', 
              key: 'amount',
              render: (val) => `$${val}` 
            },
            { 
              header: 'Month', 
              key: 'month' 
            },
            { 
              header: 'Status', 
              key: 'status',
              render: (val) => (
                <span className={`px-2 py-1 rounded text-xs font-bold ${
                  val === 'paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {val.toUpperCase()}
                </span>
              )
            },
            { 
              header: 'Actions', 
              key: '_id', 
              render: (id, row: any) => (
                row.status === 'unpaid' ? (
                  <Button size="sm" onClick={() => handleUpdateStatus(id, 'paid')}>
                    Mark Paid
                  </Button>
                ) : (
                  <span className="text-gray-400 text-sm italic">No actions</span>
                )
              )
            }
          ]} 
          data={bills} 
        />
      )}
    </div>
  );
}