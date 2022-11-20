import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react";
import {formatearDinero} from '../helpers'

const CardOferta = ({ofer}) => {
    
    const { title, price, thumbnail, id} = ofer

   
  return (
    <>
  <div className='block w-95 mx-auto p-3  bg-white mb-3 rounded-md'>
     <div className='w-6/6 mx-auto'>
        <img className="w-64 mx-auto" src={thumbnail}/>
     </div>
    <div className='w-4/4 block'>
        <h1 className='text-sm'>{title}</h1>
    <div className='flex'>
        <p>{formatearDinero(price)}</p>
        <p className='text-verde text-xs font-light my-auto ml-2'> $28% OFF</p>
    </div>
    </div>
   </div>
    </>
  )
}

export default CardOferta