interface CardProps {
  title: string;
  value: string | number;
  description?: string;
}

export function Card({ title, value, description }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="text-sm font-medium text-gray-600 mb-1">{title}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      {description && (
        <div className="text-xs text-gray-500">{description}</div>
      )}
    </div>
  );
}