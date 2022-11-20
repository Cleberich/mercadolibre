import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./Card";

const ContenedorProductos = () => {
   const [iphone, setIphone] = useState([])
   const [paginaLista, setPaginaLista] = useState(false)
    const obtenerIphone = async () =>{
        const  {data}  = await axios('https://api.mercadolibre.com/sites/MLA/search?q=categories')
       setIphone(data.results)
    }

    useEffect(()=>{
        obtenerIphone()
        setPaginaLista(true)
    }, [])
   
   
  return (
    <div className="w-full mt-4 rounded-md">
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
    </div>
  )
}

export default ContenedorProductos