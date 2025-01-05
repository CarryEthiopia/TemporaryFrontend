// src/components/History/TravelerHistory/DeliveryHistory.jsx
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
      {/* Responsive table */}
      <div className="overflow-x-auto sm:overflow-visible">
        <table className="w-full hidden sm:table">
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
        {/* Mobile view */}
        <div className="sm:hidden space-y-4 p-4">
          {deliveries.map((delivery) => (
            <div
              key={delivery.id}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50"
            >
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Date:</span> {delivery.date}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Sender:</span> {delivery.sender}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Route:</span>{" "}
                {delivery.route.from} → {delivery.route.to}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Package:</span>{" "}
                {delivery.package}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Earnings:</span>{" "}
                {delivery.earnings}
              </p>
              <p className="text-sm text-green-700">
                <span className="font-semibold">Status:</span> {delivery.status}
              </p>
              <p className="text-sm text-yellow-500">
                {"★".repeat(delivery.rating)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryHistory;
