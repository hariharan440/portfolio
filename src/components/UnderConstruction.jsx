//UnderConstruction.jsx
import React from 'react';
import uconst from "../assets/uconst.png";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <img
        src={uconst}
        alt="Website in Progress Illustration"
        className="mb-8 h-96 w-96 object-contain"
      />
      <h1 className="text-4xl font-bold text-gray-700 mb-4">We're Getting Ready!</h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl">
        Thank you for visiting. Our website is currently under construction and will be live soon. We’re working hard to bring you an improved experience. Please check back with us shortly!
      </p>
    </div>
  );
};

export default UnderConstruction;
