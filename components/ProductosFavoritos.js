import { useState } from 'react'
import { formatearDinero } from '../helpers'

const ProductosFavoritos = ({favorito, favoritos, setFavoritos}) => {

    const { title, price, thumbnail, id} = favorito
  
    const handleEliminar = id =>{
      const actualizados = favoritos.filter(favo => favo.id !== id)
      setFavoritos(actualizados)
  }
 
  return (
    <div className='flex w-full p-3 bg-white mb-3 border-b border-solid border-gray-200'>
     <div className='w-2/6'>
        <img className=""src={thumbnail}/>
     </div>
    <div className='w-2/4 block'>
        <h1 className='text-sm'>{title}</h1>
        <p>{formatearDinero(price)}</p>
        <p className='text-verde text-xs'>en 10 x {formatearDinero(price/10)} sin interés</p>
        <p className='text-verde text-xs font-bold'>Envío gratis</p>
        <button onClick={()=>handleEliminar(id)}className='text-blue-500 xs-1'>Eliminar</button>
    </div>
        <hr></hr>
   </div>
  )
}

export default ProductosFavoritos