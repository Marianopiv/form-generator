import React, { useContext, useEffect, useState } from "react";
import { FaFolderOpen, FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useInputs } from "../../hook/useInputs";
import { useShow } from "../../hook/useShow";
import { Context } from "../../provider/Provider";
import ListedInputs from "../listedInputs/ListedInputs";

const CreatedForm = () => {
  const navigate = useNavigate();
  const { forms, eliminateForm } = useContext(Context);
  const { handleValue, capturedValue } = useInputs();
  const { ChangeShow, show } = useShow();
  const [selectThisForm, setSelectThisForm] = useState(forms);

  const selectForm = (id) => {
    setSelectThisForm(forms.filter((form) => form.id === id));
    ChangeShow();
  };

  useEffect(() => {
    if (!show) {
      setSelectThisForm(forms);
    }
  }, [show, forms]);

  return (
    <div className="bg-cyan-200 rounded-lg p-10 w-screen h-screen ">
      <FaWindowClose
        onClick={() => navigate(-1)}
        className="mx-auto mb-10 hover:cursor-pointer text-2xl"
      />
      <div className="flex justify-center gap-10 flex-wrap ">
        {selectThisForm.map(({ title, inputs, id }, index) => (
          <div
            key={title}
            className="flex flex-col border-2 rounded-lg p-3 justify-between shadow-2xl"
          >
            <div className="flex justify-center rounded-full items-center">
              <FaWindowClose
                color="red"
                onClick={() => eliminateForm(title)}
                className="mx-auto mb-10 hover:cursor-pointer text-2xl"
              />
            </div>
            <h2 className="text-3xl capitalize mb-2 w-48 " key={index}>
              {title}
            </h2>
            <ListedInputs
              title={title}
              inputs={inputs}
              handleValue={handleValue}
              capturedValue={capturedValue}
              show={show}
              ChangeShow={ChangeShow}
            />
            <FaFolderOpen
              className="mx-auto  hover:cursor-pointer text-2xl"
              onClick={() => selectForm(id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatedForm;
