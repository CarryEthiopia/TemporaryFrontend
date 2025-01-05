const DeliveryHistory = () => {
  const deliveries = [
    {
      id: 1,
      date: "Jan 10, 2024",
      sender: "John Smith",
      route: {
        from: "London",
        to: "Paris",
      },
      package: "Electronics",
      earnings: "$85",
      status: "Delivered",
      rating: 5,
    },
    // Add more delivery history items
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Delivery History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Sender
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Route
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Package
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Earnings
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Rating
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {deliveries.map((delivery) => (
              <tr key={delivery.id}>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {delivery.date}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {delivery.sender}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {delivery.route.from} → {delivery.route.to}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {delivery.package}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {delivery.earnings}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-50 text-green-700">
                    {delivery.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-yellow-500">
                  {"★".repeat(delivery.rating)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryHistory;
