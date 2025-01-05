// src/components/History/SenderHistory/RecentTransactions.jsx
const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      date: "Jan 15, 2024",
      traveler: "Alice Smith",
      from: "New York",
      to: "London",
      amount: "$120",
      status: "Delivered",
    },
    // Add more transactions
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <h3 className="text-lg font-semibold p-4 border-b">
        Recent Transactions
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Traveler
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Route
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Amount
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {transaction.date}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {transaction.traveler}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {transaction.from} → {transaction.to}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {transaction.amount}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 py-1 rounded-full text-xs bg-green-50 text-green-700">
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
