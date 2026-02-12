interface BadgeProps {
  status?: string; // Made optional for safety
}

export function Badge({ status }: BadgeProps) {
  const getStatusStyles = () => {
    // SAFETY GUARD: If status is missing, default to 'unknown'
    const lowerStatus = (status || 'unknown').toLowerCase();
    
    if (lowerStatus === 'pending') {
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
    if (lowerStatus === 'approved') {
      return 'bg-green-100 text-green-800 border-green-200';
    }
    if (lowerStatus === 'resolved') {
      return 'bg-blue-100 text-blue-800 border-blue-200';
    }
    if (lowerStatus === 'rejected') {
      return 'bg-red-100 text-red-800 border-red-200';
    }
    if (lowerStatus === 'paid') {
      return 'bg-green-100 text-green-800 border-green-200';
    }
    if (lowerStatus === 'unpaid') {
      return 'bg-orange-100 text-orange-800 border-orange-200';
    }
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles()}`}>
      {status || 'Unknown'}
    </span>
  );
}