import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';

export function ManageBookings() {
  const bookingsData = [
    {
      id: 1,
      member: 'John Doe (A-101)',
      facility: 'Community Hall',
      date: '2026-02-15',
      time: '10:00 AM - 2:00 PM',
      status: 'Pending'
    },
    {
      id: 2,
      member: 'Jane Smith (B-205)',
      facility: 'Sports Court',
      date: '2026-02-20',
      time: '6:00 PM - 8:00 PM',
      status: 'Approved'
    },
    {
      id: 3,
      member: 'Robert Wilson (C-303)',
      facility: 'Swimming Pool',
      date: '2026-02-18',
      time: '4:00 PM - 6:00 PM',
      status: 'Pending'
    },
    {
      id: 4,
      member: 'Sarah Brown (A-405)',
      facility: 'Party Lawn',
      date: '2026-02-25',
      time: '7:00 PM - 11:00 PM',
      status: 'Rejected'
    }
  ];

  const columns = [
    { header: 'Member', key: 'member' },
    { header: 'Facility', key: 'facility' },
    { header: 'Date', key: 'date' },
    { header: 'Time', key: 'time' },
    { 
      header: 'Status', 
      key: 'status',
      render: (value: string) => <Badge status={value} />
    },
    {
      header: 'Action',
      key: 'action',
      render: (_: any, row: any) => (
        <div className="flex gap-2">
          {row.status === 'Pending' && (
            <>
              <Button variant="success" size="sm">Approve</Button>
              <Button variant="danger" size="sm">Reject</Button>
            </>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Bookings</h1>
          <p className="text-gray-600">Review and approve facility booking requests</p>
        </div>
        
        <Table columns={columns} data={bookingsData} />
      </div>
    </div>
  );
}