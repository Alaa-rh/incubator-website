import React from "react";

const StatsCards = ({ showIcons = true, stats }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center gap-2"
        >
          {showIcons && (
            <span className="text-4xl">{item.icon}</span>
          )}

          <div className="flex flex-col items-center">
            <p className="text-gray-500">{item.label}</p>
            <p className="text-3xl font-bold">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
