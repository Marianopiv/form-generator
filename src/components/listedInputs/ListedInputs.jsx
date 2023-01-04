import React from 'react'
import { useShow } from '../../hook/useShow';
import { FaFolderOpen,FaWindowClose } from "react-icons/fa";
import Input from '../../shared/Input';
import useHash from '../../hook/useHash';

const ListedInputs = ({inputs,handleValue, FinalRecolect, capturedValue,recolected,title}) => {
    const {generarJson, downloadTxt,jwt} = useHash();
    const { ChangeShow,show } = useShow();
  return (
    <>
    {show?<><div className='absolute top-0 right-0 bottom-32 left-0 m-auto rounded-md w-2/3 h-2/3 z-50 bg-cyan-500 p-4 shadow-2xl'><FaWindowClose onClick={ChangeShow} className='mx-auto mb-10 hover:cursor-pointer text-2xl'/><h1 className='uppercase font-bold'>{title}</h1>{inputs.map((item, index) => (<>
      
       <Input type={item.type} span={item.span} key={index} handleValue={handleValue} FinalRecolect={FinalRecolect} capturedValue={capturedValue} recolected={recolected}/></>
      ))} <button  className='bg-blue-800 mt-4 ml-4' onClick={()=>generarJson(capturedValue)}>Encrypt File</button><button onClick={()=>downloadTxt(jwt,"form")} className='bg-blue-800  mt-4 ml-4'>Download Encrypted</button></div></>:<FaFolderOpen className='mx-auto mt-2 hover:cursor-pointer text-2xl' onClick={ChangeShow}/>}
    </>
  )
}

export default ListedInputs