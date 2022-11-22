import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'
import { formatearDinero } from '../helpers/'
import useMl from '../hooks/useMl'
import Sugeridos from '../components/Sugeridos';
import BarraInferior from '../components/BarraInferior'
export default function Detalles() {
  const router = useRouter()
  const { detalle, sugeridos } = useMl()
  console.log(detalle);

  return (
<>
    <Head>
      <title>{`MercadoLibre - ${detalle.title}`}</title>
      <meta name='description' content={`Producto ${detalle.title}`}/>
    </Head>
    <div className='bg-white h-screen'>
    <div className='bg-amarillo py-4 flex justify-between sticky top-0'>
      <div>
        <button type='button' className='ml-2' onClick={()=>router.push('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </button>
      </div>
      <div>

      </div>
      <div className='ml-64'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
      </div>
      <div className='pr-3'>
         <button className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
         </button>
      </div>
    </div>
    <div className='flex pt-3'>
    <p className='xs-1  ml-2 px-1 capitalize'>{detalle?.condition} |</p>
    <p className='xs-1 mr-2'>{detalle?.available_quantity} vendidos</p>
    </div>
      <div className=''>
        <h1 className='p-3 font-light'>{detalle?.title}</h1>
      </div>
      <div className=''>
        <img className="w-80 mx-auto" src={detalle?.thumbnail} alt={detalle?.title}/>
      </div>
      <div className="pl-3">
      <p className='line-through xs-1 text-gray-500'>{formatearDinero (detalle ? 213 : detalle?.price * 1.12)}</p>
      <p className='text-2xl my-auto'>{ formatearDinero(detalle ? 200 : detalle?.price)} <span className='text-verde font-bold text-sm pb-1'>12% OFF</span></p>
      <p className='text-md'>en <span className='text-verde'>10 x {formatearDinero(detalle ? 220 :detalle?.price/10)} sin interés</span></p>
      <p className='xs-1 text-blue-600 mt-1'>Ver todos los medios de pago</p>
      <p className='bg-blue-500 rounded-sm w-20 mt-1 pl-1 xs text-white font-bold uppercase'>Oferta del día</p>
      </div>
      <div className='pl-3 mt-2 flex text-verde'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        <p className='text-sm ml-2 my-auto'>Llega gratis <b>mañana</b></p>
      </div>
      <div className='pl-3 mt-2 flex text-verde'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 rotate-180">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
        </svg>
        <p className='text-sm ml-2 my-auto'>Devolución gratis</p>

      </div>
        <p className='xs-1 text-gray-600 ml-11 -mt-1'>Tienes 30 días desde que lo recibes</p>
      <h2 className='pl-3 text-sm my-3 text-bold'>Stock disponible</h2>
      <div className='bg-gray-100 w-90 rounded-md mx-auto py-3'>
        <p className='text-xs pl-3'>Cantidad: <b>1</b> <span className='ml-6 text-gray-500'>({detalle?.sold_quantity} disponibles)</span></p>
      </div>
      <div className='mt-3'>
        <button className='block w-90  mx-auto py-3 text-center bg-blue-500 text-white text-md font-normal rounded-md'>Comprar ahora</button>
        <button className='block w-90  mx-auto py-3 text-center bg-blue-100 text-blue-500 text-md font-normal rounded-md mt-2'>Agregar al carrito</button>
      </div>
      <div className='flex pl-3 py-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <p className='xs-1 text-gray-600 ml-3 mr-7'><span className='text-blue-500'>Compra Protegida</span>, recibe el producto que esperabas o te devolvemos tu dinero.</p>
      </div>
      <hr></hr>
        <h2 className='py-3 pl-3 pr-20 text-lg font-light'>Quienes vieron este producto también compraron</h2>
      <div className='carrusel'>
      {sugeridos.map(sugerido =>(
        <Sugeridos
        key={sugerido.id}
        sugerido={sugerido}
        />

      ))
        
      }

      </div>
      </div>
      <BarraInferior/>
      <div className='py-20'></div>
      </>
  )
}
