import React from "react";

const Input = ({span,type,handleValue,capturedValue}) => {
  console.log(capturedValue)
  return (
    <div className="flex flex-col justify-center items-center p-10 mx-2">
      <span className="capitalize">{span}</span>
      <input
        className="text-black flex flex-col justify-center rounded-sm"
        type={type}
        name={span}
        onChange={handleValue}
      ></input>
    </div>
  );
};

export default Input;
