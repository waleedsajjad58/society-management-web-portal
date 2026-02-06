import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';

export function ManageComplaints() {
  const complaintsData = [
    {
      id: 1,
      member: 'John Doe (A-101)',
      category: 'Maintenance',
      description: 'Elevator not working on 3rd floor',
      status: 'Pending',
      date: '2026-02-01'
    },
    {
      id: 2,
      member: 'Jane Smith (B-205)',
      category: 'Cleanliness',
      description: 'Garbage not collected for 2 days',
      status: 'Resolved',
      date: '2026-01-28'
    },
    {
      id: 3,
      member: 'Robert Wilson (C-303)',
      category: 'Security',
      description: 'Main gate lock broken',
      status: 'Pending',
      date: '2026-02-03'
    },
    {
      id: 4,
      member: 'Sarah Brown (A-405)',
      category: 'Noise',
      description: 'Late night construction noise',
      status: 'Pending',
      date: '2026-02-02'
    }
  ];

  const columns = [
    { header: 'Member', key: 'member' },
    { header: 'Category', key: 'category' },
    { header: 'Description', key: 'description' },
    { 
      header: 'Status', 
      key: 'status',
      render: (value: string) => <Badge status={value} />
    },
    { header: 'Date', key: 'date' },
    {
      header: 'Action',
      key: 'action',
      render: (_: any, row: any) => (
        <div className="flex gap-2">
          {row.status === 'Pending' && (
            <Button variant="success" size="sm">Resolve</Button>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="admin" />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Complaints</h1>
          <p className="text-gray-600">Review and resolve member complaints</p>
        </div>
        
        <Table columns={columns} data={complaintsData} />
      </div>
    </div>
  );
}