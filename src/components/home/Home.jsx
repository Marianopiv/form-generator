import React from 'react'
import formIcon from "../../assets/form-soe-img.png"
import Form from '../form/Form'
import './index.css'

const Home = () => {
    
  return (
    <div className='bg-white flex flex-col items-center  w-screen height-custom pt-10'>
        <div className="flex justify-center">
        <img className='w-36 logo-spin' src={formIcon} alt="" />
        </div>
        <Form/>
    </div>

  )
}

export default Home

//Meterle Routes a este proyecto parar que quede decente. Tarea para lunes 2 de enero, generar generador de documento, con ticks para elegir o no que tener