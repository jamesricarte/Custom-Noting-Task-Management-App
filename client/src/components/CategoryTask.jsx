import React from "react";

const CategoryTask = ({ taskInfo }) => {
  return (
    <div className="flex gap-1 items-center text-xs">
      <div className="w-3 h-3 bg-amber-200 rounded-sm"></div>
      <p>{taskInfo}</p>
    </div>
  );
};

export default CategoryTask;
