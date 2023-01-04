/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useInputs } from "../../hook/useInputs";
import { Context } from "../../provider/Provider";
import GoBack from "../../shared/GoBack";
import DetailInput from "../detailInput/DetailInput";

const DetailForm = () => {
  const {handleBorrador, handleAddInput, form, handleChangeTitle} = useInputs()
  const { handleSaveForm } = useContext(Context);
  const navigate =  useNavigate()
  return (
    <div className="bg-blue-900 w-screen h-screen flex flex-col items-center pt-14" >
      <GoBack action={()=>navigate(-1)}/>
        <div className="">
          <input className="text-black rounded-md p-1 text-center" onChange={(e)=>handleChangeTitle(e.target.value)} type="text" placeholder="Titulo del form" />
          <DetailInput handleBorrador={handleBorrador} handleAddInput={handleAddInput} form={form} handleSaveForm = {handleSaveForm}/>
        </div>
    </div>
  );
};

export default DetailForm;
