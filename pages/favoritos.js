import Head from 'next/head'
import React from 'react'
import BarraInferior from '../components/BarraInferior'
import ProductosFavoritos from '../components/ProductosFavoritos'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function favoritos() {
    const [favoritos,setFavoritos] = useState([])
    
    const obtenerFavoritos = async () =>{
        const  {data}  = await axios('https://api.mercadolibre.com/sites/MLU/search?q=macbook-pro&limit=2')
        setFavoritos(data.results)
    }
    useEffect(()=>{
        obtenerFavoritos()
    },[])

   

  return (
    <>
    <Head>
        <title>MercadoLibre - Productos Favoritos</title>
        <meta name="description" content="tus productos favoritos"/>
    </Head>
    <main className='bg-white h-screen'>
    <div className='bg-amarillo p-3 flex justify-center'>
        <h2 className='text-center mr-28'>Favoritos</h2>
        <button className='-mr-16'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </button>
        <button className='-mr-20'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </button>
    </div>
    <div className='bg-white'>
    {favoritos.map(favorito => (
       <ProductosFavoritos
       key={favorito.id}
       favorito={favorito}
       setFavoritos={setFavoritos}
       favoritos={favoritos}
       />
       ))}
    </div>
    </main>
    <BarraInferior/>
    </>
  )
}
