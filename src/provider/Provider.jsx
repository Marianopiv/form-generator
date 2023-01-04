import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const Context = createContext();

const Provider = ({ children }) => {
    const [inputAdded, setInputAdded] = useState('');
    const [forms, setForms] = useState([]);

    const handleSaveForm = (form) => {
      setForms([...forms, form]);
      Swal.fire({
        icon: 'success',
        title: 'Form added',
      })
    };

  const addInput = (e) => {
    const { value } = e.target;
    setInputAdded([...inputAdded, value]);
  };
  return (<Context.Provider value={{addInput,inputAdded,setInputAdded,handleSaveForm,forms}}>{children}</Context.Provider>)
};

export default Provider;
