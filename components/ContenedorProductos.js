import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./Card";
import CardOferta from "./CardOferta";
import CardProductos from "./CardProductos"

const ContenedorProductos = () => {
   const [iphone, setIphone] = useState([])
   const [oferta, setOferta] = useState([])
   const [vistas, setVistas] = useState([])
   const [paginaLista, setPaginaLista] = useState(false)
    const obtenerIphone = async () =>{
        const  {data}  = await axios('https://api.mercadolibre.com/sites/MLA/search?q=categories&limit=1')
       setIphone(data.results)
    }
    const obtenerOferta = async () =>{
        const  {data}  = await axios('https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=1')
        setOferta(data.results)
    }
    const obtenerProductos = async () =>{
        const  {data}  = await axios('https://api.mercadolibre.com/sites/MLA/search?q=electronica&limit=20')
        setVistas(data.results)
    }

    useEffect(()=>{
        obtenerIphone()
        obtenerOferta()
        obtenerProductos()
        setPaginaLista(true)
    }, [])
   
   
  return (
    <div className="w-96 mx-auto mt-4 rounded-md">
        <div className="bg-white ">
        <h2 className="ml-5">Visto recientemente</h2>
        <hr></hr>
        </div>
      {paginaLista ? iphone.map(celu => (
       <Card
       key={celu.id}
       celu={celu}
       />
       )): ''}
        <div className="bg-white -mt-4 rounded-md">
          <hr></hr>
           <div  className="flex justify-between">
              <h2 className="ml-5 text-blue-600 font-normal xs-1 py-1">Ver historial de navegación</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 my-auto mr-1 text-blue-600 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
           </div>
        </div>
        <div className="bg-white mt-3 rounded-md">
        <h2 className="ml-5">Oferta del día</h2>
        <hr></hr>
        </div>
        <div className="">
        {paginaLista ? oferta.map(ofer => (
       <CardOferta
       key={ofer.id}
       ofer={ofer}
       />
       )): ''}
        </div>
        <div className="bg-white mt-3 rounded-md">
        <h2 className="mx-5 py-2">Relacionado con tus visitas en Electrónica, Audio y Video</h2>
        <hr></hr>
        </div>
        <div className="">
        {paginaLista ? vistas.map(prod => (
       <CardProductos
       key={prod.id}
       prod={prod}
       />
       )): ''}
        </div>
        
    </div>
  )
}

export default ContenedorProductos