import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import TaskCard from "./components/TaskCard";
import CategoryCard from "./components/CategoryCard";
import Modal from "./components/Modal";
import NewCategoryModal from "./components/NewCategoryModal";
import TasksModal from "./components/TasksModal";
import Button from "./components/Button";

const App = () => {
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

  const [createNewCategoryToggle, setCreateNewCategoryToggle] = useState(false);
  const [tasksModalToggle, setTasksModalToggle] = useState(false);
  const [miscellaneous, setMiscellaneous] = useState(false);

  return (
    <>
      <Nav />
      <main className="py-12 relative">
        <section className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[94%]">
            <TaskCard
              cardTitle="To do"
              listOfTasks={tasks1}
              onClick={() => setTasksModalToggle((prev) => !prev)}
            />
            <TaskCard
              cardTitle="To Buy"
              listOfTasks={tasks2}
              onClick={() => setMiscellaneous((prev) => !prev)}
            />
            <div className="w-full h-72 bg-white rounded-xl"></div>
          </div>
        </section>
        <section className="mt-8 flex flex-col items-center">
          <div className="w-[94%]">
            <div className="flex gap-3">
              <Button
                onClick={() => setCreateNewCategoryToggle((prev) => !prev)}
              >
                Create New Category
              </Button>
              <Button backgroundColor="bg-green-500">
                Arrange the Sequence
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 cursor-pointer">
              <CategoryCard
                listOfTasks={tasks1}
                categoryName="Basic Gadget Needs"
                onClick={() => setMiscellaneous((prev) => !prev)}
              />
              <CategoryCard
                listOfTasks={tasks2}
                categoryName="Laptop Hardwares"
                onClick={() => setMiscellaneous((prev) => !prev)}
              />
              <CategoryCard
                listOfTasks={tasks1}
                categoryName="Skills"
                onClick={() => setMiscellaneous((prev) => !prev)}
              />
            </div>
          </div>
        </section>
        {/* <Modal
          miscelleneous={miscellaneous}
          closeModal={() => setMiscellaneous((prev) => !prev)}
        /> */}
        <NewCategoryModal
          createNewCategoryToggle={createNewCategoryToggle}
          closeModal={() => setCreateNewCategoryToggle((prev) => !prev)}
        />
        <TasksModal
          tasksModalToggle={tasksModalToggle}
          closeModal={() => setTasksModalToggle((prev) => !prev)}
        />
      </main>
    </>
  );
};

export default App;
