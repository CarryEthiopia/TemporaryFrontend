const TravelerStats = () => {
  const stats = [
    { label: "Deliveries Completed", value: "38", icon: "📦" },
    { label: "Total Earnings", value: "$3,250", icon: "💰" },
    { label: "Cities Visited", value: "15", icon: "🌎" },
    { label: "On-time Rate", value: "98%", icon: "⏰" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-4"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl mb-2">{stat.icon}</span>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
              {stat.value}
            </h4>
            <p className="text-gray-600 text-sm text-center">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelerStats;
