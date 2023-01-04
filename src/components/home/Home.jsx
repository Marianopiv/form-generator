import React from 'react'
import formIcon from "../../assets/form-soe-img.png"
import Form from '../form/Form'
import './index.css'

const Home = () => {
    
  return (
    <div className='bg-blue-900 flex flex-col items-center  w-screen height-custom'>
        <div className="flex justify-center">
        <img className='w-36' src={formIcon} alt="" />
        </div>
        <Form/>
    </div>

  )
}

export default Home

//Meterle Routes a este proyecto parar que quede decente. Tarea para lunes 2 de enero, generar generador de documento, con ticks para elegir o no que tener