import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import { Badge } from '../../components/Badge';
import { Button } from '../../components/Button';

export function ManageChallans() {
  const challansData = [
    {
      id: 1,
      member: 'John Doe (A-101)',
      month: 'February 2026',
      amount: '₹5,000',
      status: 'Unpaid'
    },
    {
      id: 2,
      member: 'Jane Smith (B-205)',
      month: 'February 2026',
      amount: '₹5,000',
      status: 'Paid'
    },
    {
      id: 3,
      member: 'Robert Wilson (C-303)',
      month: 'February 2026',
      amount: '₹5,000',
      status: 'Unpaid'
    },
    {
      id: 4,
      member: 'Sarah Brown (A-405)',
      month: 'February 2026',
      amount: '₹5,000',
      status: 'Paid'
    },
    {
      id: 5,
      member: 'Michael Johnson (D-102)',
      month: 'February 2026',
      amount: '₹5,000',
      status: 'Unpaid'
    }
  ];

  const columns = [
    { header: 'Member', key: 'member' },
    { header: 'Month', key: 'month' },
    { header: 'Amount', key: 'amount' },
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
          {row.status === 'Unpaid' && (
            <Button variant="success" size="sm">Mark Paid</Button>
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Challans</h1>
          <p className="text-gray-600">Track and manage maintenance payments</p>
        </div>
        
        <Table columns={columns} data={challansData} />
      </div>
    </div>
  );
}