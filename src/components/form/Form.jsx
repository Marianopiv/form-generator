/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInputs } from "../../hook/useInputs";
import { Context } from "../../provider/Provider";
import ListedInputs from "../listedInputs/ListedInputs";

const Form = () => {
  const { forms } = useContext(Context);
  
  const {handleValue, FinalRecolect, capturedValue} = useInputs()

  const navigate =  useNavigate()


  return (
    <div className="bg-blue-900 text-white flex flex-col gap-10">
      <h1>Generador de formularios</h1>
      <div className="text-center">
        <h2 className="text-xl font-thin pb-8 px-10">Genere Sus formularios personalizados con unos pocos clicks, crear formularios a medida nunca fue tan facil!</h2>
        <button className="bg-cyan-500 w-48" onClick={()=>navigate("/form-creation")}>
          Crear Form
        </button>
      </div>
      {forms.length < 1 ? (
        <div className="flex justify-center">
          <h2 className=" w-1/2">
            Sin formularios, ingrese un nuevo formulario
          </h2>
        </div>
      ) : (
        <>
          <div className="">
            {forms.map(({ title, inputs }, index) => (
              <>
                <h2 className="text-3xl capitalize mb-2" key={index}>{title}</h2>
                <ListedInputs title={title} inputs={inputs} handleValue={handleValue} FinalRecolect={FinalRecolect} capturedValue={capturedValue}/>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

//Hacer logica similar para que se agreguen inputs dentro de detailForm-Inputs
//Seguir dandole logica como tarea, recordar que inputs va en un componente adentro de detailform
//Cada formulario tiene que abrirse en un acordeon con todos sus inputs generados y con un boton de generar texto para generar el archivo hasheado

//Clase 27/12, para el miercoles 28 Primero hacer que los inputs tengan spans y values, para poder guardar con onchange los datos que yo haya escrito y guardado en los respectivos inputs.
//Que yo pueda elegri el nombre de cada span antes de generar el form
//Y una vvez guardado en el state, hashearlo y descargarlo en un txt

export default Form;
