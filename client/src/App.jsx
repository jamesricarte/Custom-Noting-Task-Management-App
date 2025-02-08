import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import TaskCard from "./components/TaskCard";
import CategoryCard from "./components/CategoryCard";
import Modal from "./components/Modal";

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

  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [createNewCategoryToggle, setCreateNewCategoryToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({ top: rect.top, left: rect.left });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleOpenModal = (event) => {
    setCreateNewCategoryToggle((prev) => !prev);
    console.log("X:", event.clientX, "Y:", event.clientY);
  };
  return (
    <>
      <Nav />
      <main className="py-12 relative">
        <section className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[94%]">
            <TaskCard
              cardTitle="To do"
              listOfTasks={tasks1}
              onClick={handleOpenModal}
            />
            <TaskCard
              cardTitle="To Buy"
              listOfTasks={tasks2}
              onClick={handleOpenModal}
            />
            <div className="w-full h-72 bg-white rounded-xl"></div>
          </div>
        </section>

        <section className="mt-8 flex flex-col items-center">
          <div className="w-[94%]">
            <div className="flex gap-3">
              <button
                ref={buttonRef}
                className="bg-amber-400 text-white p-1 rounded-md cursor-pointer"
                onClick={handleOpenModal}
              >
                Create New Category
              </button>
              <button className="bg-green-500 text-white p-1 rounded-md cursor-pointer">
                Arrange the Sequence
              </button>

              <p>Top: {position.top.toFixed(2)}px</p>
              <p>Left: {position.left.toFixed(2)}px</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 cursor-pointer">
              <CategoryCard
                listOfTasks={tasks1}
                categoryName="Basic Gadget Needs"
                onClick={handleOpenModal}
              />
              <CategoryCard
                listOfTasks={tasks2}
                categoryName="Laptop Hardwares"
                onClick={handleOpenModal}
              />
              <CategoryCard
                listOfTasks={tasks1}
                categoryName="Skills"
                onClick={handleOpenModal}
              />
            </div>
          </div>
        </section>
        <Modal
          createNewCategoryToggle={createNewCategoryToggle}
          handleOpenModal={handleOpenModal}
        />
      </main>
    </>
  );
};

export default App;
