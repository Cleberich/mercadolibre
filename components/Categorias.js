import { useState, useEffect } from "react"
import axios from "axios"

const Categorias = () => {
    const [categorias, setCategorias] = useState([])

    const obtenerCategorias = async ()=>{
        const {data} = await axios('https://api.mercadolibre.com/sites/MLA/search?q=macbook')
        setCategorias(data.results)
    }
    useEffect(()=>{
        obtenerCategorias()
    },[])
    
  return (
    <div>
        <h1>{categorias.title}</h1>
    </div>
  )
}

export default Categorias