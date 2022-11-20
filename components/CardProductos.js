import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react";
import {formatearDinero} from '../helpers'

const CardProductos = ({prod}) => {
    
    const { title, price, thumbnail, id} = prod

   
  return (
    <>
  <div className='flex w-96 mx-auto p-3 bg-white mb-3 rounded-md'>
     <div className='w-2/6'>
        <img className=""src={thumbnail}/>
     </div>
    <div className='w-2/4 block'>
        <h1 className='text-sm'>{title}</h1>
        <p>{formatearDinero(price)}</p>
        <p className='text-verde text-xs'>10 x {formatearDinero(price/10)} sin interés</p>
        <p className='text-verde text-xs font-bold'>Envío gratis</p>
    </div>
   </div>
    </>
  )
}

export default CardProductos