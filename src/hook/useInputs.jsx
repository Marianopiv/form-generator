import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';


export function useInputs() {
  const id = uuidv4();
  const [form, setForm] = useState({ title: "", inputs: [],id:id });
  const [inputBorrador, setInputBorrador] = useState({span:"",type:""});
  const [capturedValue, setCapturedValue] = useState({})
  const handleBorrador = (e) => {
    const { value, name } = e.target;

    setInputBorrador({...inputBorrador,[name]:value,value:""});
  };
  const handleAddInput = () =>{
    setForm({ ...form, inputs: [...form.inputs, inputBorrador] })
    Swal.fire({
      icon: 'success',
      title: 'Input agregado',
    })
  }

    const handleChangeTitle = (title) => {
        setForm({...form, title})
    }    

    const handleValue = (e) => {
      const {value,name} = e.target;
      setCapturedValue({...capturedValue,[name]:value})
    }



  return { handleBorrador, handleAddInput, form, handleChangeTitle, handleValue,capturedValue };
}
