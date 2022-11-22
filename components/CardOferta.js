import React from 'react'
import Image from 'next/image'
import {formatearDineroUSD} from '../helpers'
import useMl from '../hooks/useMl';

const CardOferta = ({ofer}) => {
    
  const { title, price, thumbnail, id} = ofer
    const {verDetallesOferta} = useMl()
   
  return (
    <>
  <div className='block w-95 mx-auto p-3  bg-white mb-3 rounded-md'  onClick={()=>verDetallesOferta(id)}>
     <div className='w-6/6 mx-auto'>
        <img className="w-64 mx-auto" alt={`producto ${title}`}src={thumbnail}/>
     </div>
    <div className='w-4/4 block'>
        <h1 className='text-sm'>{title}</h1>
    <div className='flex'>
        <p>{formatearDineroUSD(price)}</p>
        <p className='text-verde text-xs font-light my-auto ml-2'> $28% OFF</p>
    </div>
    </div>
   </div>
    </>
  )
}

export default CardOferta