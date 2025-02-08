import React from "react";
import Task from "./Task";

const TaskCard = ({ cardTitle, listOfTasks = [], onClick }) => {
  return (
    <div className="w-full h-72 bg-white rounded-xl p-7 transform transition-all duration-300 hover:scale-[1.04] cursor-pointer">
      <h3 className="font-semibold text-lg">{cardTitle}</h3>
      {listOfTasks.map((task, index) => (
        <Task
          key={index}
          taskInfo={task.taskInfo}
          taskCategory={task.taskCategory}
          categoryColor={task.categoryColor}
          onClick={onClick}
        />
      ))}
      <button className="text-xs bg-amber-300 p-1 rounded-md text-white cursor-pointer hidden">
        See More
      </button>
    </div>
  );
};

export default TaskCard;
