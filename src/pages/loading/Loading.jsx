import React from "react";
import logoLoading from '../../assets/logo.svg';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <img
        className="animate-spin w-24 h-24"
        src={logoLoading}
        alt="Loading"
      />
      <h1 className="font-bold text-lg text-center mt-2">Loading....</h1>
    </div>
  );
};

export default Loading;
