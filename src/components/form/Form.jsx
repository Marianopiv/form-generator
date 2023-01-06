/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInputs } from "../../hook/useInputs";
import { Context } from "../../provider/Provider";
import ListedInputs from "../listedInputs/ListedInputs";
import nodata from "../../assets/nodata.png";
import { useShow } from "../../hook/useShow";
import { FaWindowClose } from "react-icons/fa";

const Form = () => {
  const { forms } = useContext(Context);

  const navigate = useNavigate();

  return (
    <div className="bg-white text-blue-900 flex flex-col gap-10">
      <h1>Generador de formularios</h1>
      <div className="text-center">
        <h2 className="text-xl pb-8 px-10 font-bold">
          Genere Sus formularios personalizados con unos pocos clicks, crear
          formularios a medida nunca fue tan facil!
        </h2>
        <button
          className="bg-cyan-500 w-48 text-white"
          onClick={() => navigate("/form-creation")}
        >
          Crear Form
        </button>
      </div>
      {forms.length < 1 ? (
        <div className="flex flex-col items-center gap-10 justify-center">
          <h2 className=" w-1/2">
            Sin formularios, ingrese un nuevo formulario
          </h2>
          <img className="w-24 hidden sm:flex" src={nodata} alt="" />
        </div>
      ) : (
        <button
          className="mx-auto bg-cyan-500 text-white"
          onClick={() => navigate("/created-forms")}
        >
          Mostrar Formularios creados
        </button>
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
