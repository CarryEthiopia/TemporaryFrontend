// src/components/History/SenderHistory/SenderStats.jsx
const SenderStats = () => {
  const stats = [
    { label: "Packages Sent", value: "43" },
    { label: "Total Spent", value: "$2,450" },
    { label: "Successful Deliveries", value: "41" },
    { label: "Countries Reached", value: "12" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-4 text-center"
        >
          <h4 className="text-2xl font-bold text-gray-800">{stat.value}</h4>
          <p className="text-gray-600 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SenderStats;
