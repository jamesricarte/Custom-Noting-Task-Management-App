import React from "react";
import Button from "./Button";

const NewCategoryModal = ({ createNewCategoryToggle, closeModal }) => {
  return (
    <>
      {/* Modals */}
      <div
        className={`bg-white w-96 h-56 fixed transform -translate-x-1/2 -translate-y-1/2 rounded-xl z-20 transition-all duration-600 ease-out flex flex-col justify-center items-center ${
          createNewCategoryToggle
            ? `top-1/2 left-1/2 scale-100 opacity-100`
            : `top-1/2 left-1/2 scale-90 opacity-0 pointer-events-none`
        }`}
      >
        <button
          className="bg-gray-300 text-white py-1 px-3 rounded-full cursor-pointer absolute right-4 top-4 hover:opacity-70"
          onClick={closeModal}
        >
          x
        </button>

        <form className="flex flex-col gap-2 w-[78%]">
          <input
            className="border-2 border-gray-400 rounded-sm p-1.5"
            type="text"
          />
          <button
            type="submit"
            className="w-12 bg-amber-400 text-white py-1 px-2 rounded-lg cursor-pointer transition-all duration-200 hover:opacity-70"
          >
            Add
          </button>
        </form>
      </div>

      {/* Background */}
      <div
        className={`bg-black fixed w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition duration-800 ease-out ${
          createNewCategoryToggle
            ? "opacity-70"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
};

export default NewCategoryModal;
