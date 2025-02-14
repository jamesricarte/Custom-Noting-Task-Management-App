import React from "react";
import Button from "./Button";
import Task from "./Task";

const TasksModal = ({ tasksModalToggle, closeModal }) => {
  const tasks1 = [
    {
      taskInfo: "Update Phone System",
      taskCategory: "Basic Gadgets Needs",
      categoryColor: "red",
    },
    {
      taskInfo: "Finish Assignment",
      taskCategory: "Basic Gadgets Needs",
      categoryColor: "red",
    },
  ];

  const tasks2 = [
    {
      taskInfo: "Read Books",
      taskCategory: "Basic Gadgets Needs",
      categoryColor: "blue",
    },
    {
      taskInfo: "Right Bicycle",
      taskCategory: "Basic Gadgets Needs",
      categoryColor: "blue",
    },
  ];

  return (
    <>
      {/* Modals */}
      <div
        className={`bg-white w-[60%] h-[80%] fixed transform -translate-x-1/2 -translate-y-1/2 rounded-xl z-20 transition-all duration-600 ease-out flex flex-col justify-center items-center ${
          tasksModalToggle
            ? `top-1/2 left-1/2 scale-100 opacity-100`
            : `top-1/2 left-1/2 scale-90 opacity-0 pointer-events-none`
        }`}
      >
        <div className="absolute right-4 top-4 flex gap-2">
          <button className="bg-gray-300 text-white py-1 px-3 rounded-full cursor-pointer hover:opacity-70">
            o
          </button>
          <button
            className="bg-gray-300 text-white py-1 px-3 rounded-full cursor-pointer hover:opacity-70"
            onClick={closeModal}
          >
            x
          </button>
        </div>

        <div className="w-[92%] h-full m-11">
          <h4 className="font-bold text-xl mb-4">To do</h4>
          <Task
            taskInfo="Buy Me"
            taskCategory="Basic Camera Needs"
            categoryColor="red"
          />
          <Task
            taskInfo="Buy Me"
            taskCategory="Basic Camera Needs"
            categoryColor="red"
          />
          <Task
            taskInfo="Buy Me"
            taskCategory="Basic Camera Needs"
            categoryColor="red"
          />
        </div>
      </div>

      {/* Background */}
      <div
        className={`bg-black fixed w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition duration-800 ease-out ${
          tasksModalToggle ? "opacity-70" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
};

export default TasksModal;
