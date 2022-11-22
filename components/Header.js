import { useState } from 'react'
import Ubicacion from './Ubicacion'
import useMl from '../hooks/useMl'
import Link from "next/link";


const Header = () => {
  

  const { ubicacion } = useMl()

  const [spinner, setSpinner] = useState(false)
  const { abrirBusqueda } = useMl()


  const abirUbicacion = () =>{
    setSpinner(true)
    setTimeout(()=>{
      setUbicacion(true)
      setSpinner(false)
    }, 1000)
  }


  return (
    <>

      <div className="bg-amarillo py-4 flex justify-center menusticky">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400 mt-2 absolute left-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>  
        <input 
        onClick={()=>abrirBusqueda()}
        type='text'
        className='mr-3 ml-3 w-full rounded-2xl py-1 pl-8'
        placeholder='Buscar en Mercado Libre'       
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 mr-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
    </div>
   
      <div className="flex bg-amarillo pl-3 pb-3 menusticky-2">
        <Link href='/ubicacion' className="text-xs ml-1">Enviar a {ubicacion} {'>'}</Link>
      </div>

   
    </>
  )
}

export default Header