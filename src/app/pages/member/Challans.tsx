import { Navbar } from '../../components/Navbar';
import { Table } from '../../components/Table';
import { Badge } from '../../components/Badge';

export function Challans() {
  const challansData = [
    {
      id: 1,
      month: 'February 2026',
      amount: '₹5,000',
      status: 'Unpaid',
      dueDate: '2026-02-10'
    },
    {
      id: 2,
      month: 'January 2026',
      amount: '₹5,000',
      status: 'Paid',
      dueDate: '2026-01-10'
    },
    {
      id: 3,
      month: 'December 2025',
      amount: '₹5,000',
      status: 'Paid',
      dueDate: '2025-12-10'
    },
    {
      id: 4,
      month: 'November 2025',
      amount: '₹5,000',
      status: 'Paid',
      dueDate: '2025-11-10'
    }
  ];

  const columns = [
    { header: 'Month', key: 'month' },
    { header: 'Amount', key: 'amount' },
    { header: 'Due Date', key: 'dueDate' },
    { 
      header: 'Status', 
      key: 'status',
      render: (value: string) => <Badge status={value} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar variant="member" />
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Challans</h1>
          <p className="text-gray-600">View your maintenance payment history</p>
        </div>
        
        <div className="mb-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-5 h-5 bg-orange-500 rounded-full mt-0.5"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-orange-800">Payment Reminder</p>
              <p className="text-sm text-orange-700 mt-1">You have 1 pending challan worth ₹5,000. Please make the payment before the due date to avoid late fees.</p>
            </div>
          </div>
        </div>

        <Table columns={columns} data={challansData} />
      </div>
    </div>
  );
}