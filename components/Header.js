import { useState } from 'react'
import Ubicacion from './Ubicacion'

const Header = () => {
  
  const [resultados, setResultados] = useState(false)
  const [ubicacion, setUbicacion] = useState(false)
  const [ubi, setUbi] = useState('Prado')

  const abrirResultados = () =>{
    setResultados(true)
  }
  const cerrarResultados =()=>{
    setResultados(false)
  }
  const abirUbicacion = () =>{
    setUbicacion(true)
  }
  const cerrarUbicacion = () =>{
    setUbicacion(false)
  }
  return (
    <>
    {ubicacion ? (
      <div className="bg-amarillo py-4 flex justify-left pl-4 sticky top-0">
        <button onClick={()=>cerrarUbicacion()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </button>
  </div>
    ): (
      <div className="bg-amarillo py-4 flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400 mt-2 absolute left-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>  
        <input 
        onClick={()=>abrirResultados()}
        type='text'
        className='mr-3 ml-3 w-full rounded-2xl py-1 pl-8'
        placeholder='Buscar en Mercado Libre'
        />
       {resultados ? (
        <button onClick={()=>cerrarResultados()} className='text-xs mr-4'>Cancelar</button>
       ): (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 mr-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
       )}
    </div>
    )}
    {ubicacion ? (
      ''
    ):(
      <div className="flex bg-amarillo pl-3 pb-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      <button onClick={()=>abirUbicacion()} className="text-xs ml-1">Enviar a {ubi} {'>'}</button>
  </div>
    )}
    {resultados ? (
      <div className='resultados p-3 text-left '>
        <div className='flex justify-between my-2'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className='-ml-36 -mt-1'>soporte biciletas</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto text-gray-600 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" />
              </svg>
            </div>
        </div>
        <div className='flex justify-between my-2'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className='-ml-36 -mt-1'>Macbook pro</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto text-gray-600 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" />
              </svg>
            </div>
        </div>
        <div className='flex justify-between my-2'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto text-gray-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className='-ml-36 -mt-1'>iphone 13</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 my-auto text-gray-600 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" />
              </svg>
            </div>
        </div>
       
      </div>
    ): ''}
    {ubicacion ? (
     <Ubicacion
     setUbi={setUbi}
     setUbicacion={setUbicacion}
     ubi={ubi}
     />
    ): ''}
    </>
  )
}

export default Header