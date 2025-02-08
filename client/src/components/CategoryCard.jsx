import React from "react";
import CategoryTask from "./CategoryTask";

const CategoryCard = ({ categoryName, listOfTasks = [], onClick }) => {
  return (
    <div
      className="flex justify-center items-center w-full h-72 bg-white rounded-xl p-7 border-gray-300 border-0 transform transition-all duration-300   hover:scale-[1.04]"
      onClick={onClick}
    >
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-lg">{categoryName}</h3>
        <div className="flex flex-col gap-2">
          {listOfTasks.map((task, index) => (
            <CategoryTask key={index} taskInfo={task.taskInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
