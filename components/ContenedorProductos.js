import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./Card";
import CardOferta from "./CardOferta";
import CardProductos from './CardProductos'
import useMl from "../hooks/useMl";

const ContenedorProductos = () => {
  const {iphone, oferta, vistas, paginaLista, spinner} = useMl()
   
   
  return (  
     <main className="bg-gris py-1">
         <div className="w-95 mx-auto mt-4 rounded-md">
      <div className="bg-white w-95 mx-auto ">
      <h2 className="ml-5">Visto recientemente</h2>
      <hr></hr>
      </div>
    {iphone.map(celu => (
      <Card
      key={celu.id}
     celu={celu}
     />
     ))}
     <div className="bg-white -mt-4 w-95 mx-auto rounded-md">
     <hr></hr>
         <div  className="flex justify-between w-95 mx-auto">
            <h2 className="ml-5 text-blue-600 font-normal xs-1 py-1">Ver historial de navegación</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 my-auto mr-1 text-blue-600 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
         </div>
      </div>
      <div className="bg-white mt-3 w-95 rounded-md mx-auto">
      <h2 className="ml-5">Oferta del día</h2>
      <hr></hr>
      </div>
      <div className="">
      {oferta.map(ofer => (
     <CardOferta
     key={ofer.id}
     ofer={ofer}
     />
     ))}
      </div>
      <div className="bg-white mt-3 w-95 rounded-md mx-auto">
      <h2 className="mx-5 py-2">Relacionado con tus visitas en Electrónica, Audio y Video</h2>
      <hr></hr>
      </div>
      <div className="">
      {vistas.map(prod => (
        <CardProductos
     key={prod.id}
     prod={prod}
     />
     ))}
      </div>
      
  </div>  
     </main>
  )
}

export default ContenedorProductos