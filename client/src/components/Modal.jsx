import React from "react";

const Modal = ({ createNewCategoryToggle, handleOpenModal, clickPosition }) => {
  return (
    <>
      {/* Modals */}
      <div
        className={`bg-white w-[60%] h-[70%] fixed transform -translate-x-1/2 -translate-y-1/2 rounded-xl z-20 transition-all duration-600 ease-in-out modal ${
          createNewCategoryToggle
            ? `top-1/2 left-1/2 scale-100 opacity-100 clicked`
            : `top-1/2 left-[20%] scale-90 opacity-0 pointer-events-none`
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="bg-gray-200 text-white py-1 px-3 rounded-full cursor-pointer"
            onClick={handleOpenModal}
          >
            X
          </button>
        </div>
      </div>

      {/* Background */}
      <div
        className={`bg-black fixed w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition duration-600 ease-in-out ${
          createNewCategoryToggle
            ? "opacity-70"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </>
  );
};

export default Modal;
