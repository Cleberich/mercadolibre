import Image from 'next/image'
import { useEffect, useState } from "react";
import {formatearDinero, formatearDineroUSD} from '../helpers'
import useMl from '../hooks/useMl';

const Card = ({celu}) => {

    const { title, price, thumbnail, id} = celu
   const {verDetallesGeneral} = useMl()

  return (
    <>
  <div className='flex w-95 mx-auto p-3 bg-white mb- rounded-md' onClick={()=>verDetallesGeneral(id)}>
     <div className='w-2/6'>
        <img className=""src={thumbnail}/>
     </div>
    <div className='w-2/4 block'>
        <h1 className='text-sm'>{title}</h1>
        <p>{celu.currency_id == 'UYU' ? formatearDinero(price):formatearDineroUSD(price)}</p>
        <p className='text-verde text-xs'>10 x {celu.currency_id == 'UYU' ? formatearDinero(price/10):formatearDineroUSD(price/10)} sin interés</p>
        <p className='text-verde text-xs font-bold mb-3'>Envío gratis</p>
    </div>
   </div>

    </>
  )
}

export default Card