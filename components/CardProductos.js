import React from 'react'
import Image from 'next/image'
import {formatearDinero, formatearDineroUSD} from '../helpers'
import useMl from '../hooks/useMl'

const CardProductos = ({prod}) => {
    
    const { title, price, thumbnail, id} = prod
    const {verDetallesVistas} = useMl()
   
  return (
    <>
  <div className='flex w-95 mx-auto p-3 bg-white mb-3 rounded-md' onClick={()=>verDetallesVistas(id)}>
     <div className='w-2/6'>
        <img className=""src={thumbnail}/>
     </div>
    <div className='w-2/4 block'>
        <h1 className='text-sm'>{title}</h1>
        <p>{prod.currency_id == 'UYU' ? formatearDinero(price):formatearDineroUSD(price)}</p>
        <p className='text-verde text-xs'>10 x {prod.currency_id == 'UYU' ? formatearDinero(price/10):formatearDineroUSD(price/10)} sin interés</p>
        <p className='text-verde text-xs font-bold'>Envío gratis</p>
    </div>
   </div>
    </>
  )
}

export default CardProductos