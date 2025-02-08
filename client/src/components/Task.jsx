import React from "react";

const Task = ({ taskInfo, taskCategory, categoryColor, onClick }) => {
  const colorClasses = {
    red: "bg-red-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    yellow: "bg-yellow-400",
  };

  return (
    <div
      className="flex bg-slate-50 rounded-md px-3 py-5 gap-3 cursor-pointer mt-3 border-gray-300 border-0 transform transition-all duration-200 hover:bg-slate-100 hover:scale-[1.02]"
      onClick={onClick}
    >
      <input type="checkbox" />
      <div className="text-sm text-gray-800 flex flex-col gap-1">
        <p>{taskInfo}</p>
        <div className="flex gap-1 items-center">
          <div
            className={`w-3 h-3 ${
              colorClasses[categoryColor] || "bg-gray-400"
            } rounded-sm`}
          ></div>
          <p className="text-xs">{taskCategory}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
