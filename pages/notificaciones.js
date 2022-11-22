import {useState} from 'react'
import ItemNotificacion from '../components/ItemNotificacion';
import useMl from '../hooks/useMl'
import BarraInferior from '../components/BarraInferior'
import Image from 'next/image';

export default function notificaciones() {
  const {notificacion, paginaLista} = useMl()
  console.log(notificacion);
  return (
    <main className='bg-amarillo'>
      <div className='py-3 bg-amarillo'>
      <h2 className='text-center'>Notificaciones</h2>
      </div>
      {paginaLista && notificacion.length > 0 ? (
      <div className='bg-gris h-screen'>
       {notificacion.map(item =>(
        <ItemNotificacion
        key={item.id}
        item={item}
        />
       ))}
      </div>

      ):(
        <div className='bg-white h-screen pt-8 text-center'>
          <div>
          <Image 
            src='/img/sinNotificacion.jpeg'
            className="w-full mx-auto"
            alt='no tienes notificaciones'
            width={696}
            height={607}
            />
          </div>
          <h3 className='text-xs text-gray-500'>¡No tienes notificaciones!</h3>
          <p className='xs-1 text-gray-500'>¡Aprovecha para descubrir productos increibles!</p>
        </div>
      )}
      <BarraInferior/>
    </main>
  )
}
