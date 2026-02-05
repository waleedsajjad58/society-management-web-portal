import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button';
import { Table } from '../../components/Table';
import { Badge } from '../../components/Badge';

export function Complaints() {
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const complaintsData = [
    {
      id: 1,
      category: 'Maintenance',
      description: 'Elevator not working on 3rd floor',
      status: 'Pending',
      date: '2026-02-01'
    },
    {
      id: 2,
      category: 'Cleanliness',
      description: 'Garbage not collected for 2 days',
      status: 'Resolved',
      date: '2026-01-28'
    },
    {
      id: 3,
      category: 'Security',
      description: 'Main gate lock broken',
      status: 'Pending',
      date: '2026-02-03'
    }
  ];

  const columns = [
    { header: 'Category', key: 'category' },
    { header: 'Description', key: 'description' },
    { 
      header: 'Status', 
      key: 'status',
      render: (value: string) => <Badge status={value} />
    },
    { header: 'Date', key: 'date' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setCategory('');
    setDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="member" />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Complaints</h1>
            <p className="text-gray-600">Track and manage your complaints</p>
          </div>
          <Button onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : 'Create Complaint'}
          </Button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">New Complaint</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Cleanliness">Cleanliness</option>
                  <option value="Security">Security</option>
                  <option value="Noise">Noise</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows={4}
                  placeholder="Describe your complaint in detail"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Submit Complaint</Button>
            </form>
          </div>
        )}

        <Table columns={columns} data={complaintsData} />
      </div>
    </div>
  );
}