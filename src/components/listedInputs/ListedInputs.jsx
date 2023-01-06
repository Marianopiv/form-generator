import React, { useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import Input from "../../shared/Input";
import useHash from "../../hook/useHash";

const ListedInputs = ({
  inputs,
  title,
  handleValue,
  capturedValue,
  ChangeShow,
  show,
}) => {
  const { generarJson, downloadTxt, jwt } = useHash();

  useEffect(() => {
    
  }, [show])


  return (
    <>
      
      {show && (
        <>
          <div className="absolute rounded-md  right-0 bottom-44 left-0 m-auto z-50 w-2/3 h-2/3 bg-blue-800 text-white p-2 shadow-2xl">
            <FaWindowClose
              onClick={ChangeShow}
              className="mx-auto mb-10 hover:cursor-pointer text-2xl"
            />
            <h1 className="uppercase font-bold text-2xl sm:text-4xl">{title}</h1>
            {inputs.map((item, index) => (
              <>
                <Input
                  type={item.type}
                  span={item.span}
                  key={index}
                  handleValue={handleValue}
                  capturedValue={capturedValue}
                />
              </>
            ))}{" "}
            <button
              className="bg-cyan-500 w-48  mt-4 ml-4 text-white"
              onClick={() => generarJson(capturedValue)}
            >
              Encrypt File
            </button>
            <button
              onClick={() => downloadTxt(jwt, "form")}
              className="bg-cyan-500 w-48  mt-4 ml-4 text-white"
            >
              Download Encrypted
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default ListedInputs;
