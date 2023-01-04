import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'

const GoBack = ({action}) => {
    
  return (
    <div className='hover:cursor-pointer' onClick={action}><FaArrowCircleLeft size={44} color={'cyan'} className={"mb-4"}/></div>
  )
}

export default GoBack