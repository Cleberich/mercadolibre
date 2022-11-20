import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from "react";
import {formatearDinero} from '../helpers'

const Card = ({celu}) => {
    
    const { title, price, thumbnail, id} = celu

   
  return (
    <>
  <div className='flex w-full p-3 bg-white mb-3'>
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

export default Card