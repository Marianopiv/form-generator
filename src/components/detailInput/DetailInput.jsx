import React from "react";
import { inputTypes } from "../../config/config";
inputTypes;
const DetailInput = ({handleSaveForm,form,handleBorrador,handleAddInput}) => {

  const shareContent = {
    title: `Titulo del form: ${form.title}`,
    text: `Campos disponibles a completar: ${form.inputs.map((item)=>(item.span))}`,
    url: 'http://www.github.com/marianopiv',
  };

  const handleClick = () => {
    if (navigator.share) {
      navigator.share(shareContent)
        .then(() => console.log('Contenido compartido satisfactoriamente'))
        .catch((error) => console.log('Error al compartir el contenido:', error));
    } else {
      console.log('El navegador no admite la función de compartir');
    }
  };
  return (
    <div className="flex flex-col gap-10 text-white">
      <div className=" mt-4"><input className="text-black rounded-md p-1 text-center" name="span" type="text" placeholder="Span del input" onChange={handleBorrador} /></div>
      <select className="text-black my-3 rounded-md p-1 " onChange={handleBorrador} name="type">
        {inputTypes.map((item, index) => (
          <option className="rounded-md p-1 capitalize " key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button className="bg-cyan-500 my-4 disabled:opacity-50" onClick={handleAddInput}>Add Input</button>
      <button className="bg-cyan-500 my-4 disabled:opacity-50" onClick={()=>handleSaveForm(form)}>Guardar</button>
      <button className="bg-cyan-500 my-4 disabled:opacity-50" onClick={handleClick}>Compartir</button>
    </div>
  );
};

export default DetailInput;
