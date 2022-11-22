import {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'

const MlContext = createContext()

const MlProvider = ({children}) => {
    const [iphone, setIphone] = useState([])
    const [oferta, setOferta] = useState([])
    const [vistas, setVistas] = useState([])
    const [paginaLista, setPaginaLista] = useState(false)
    const [spinner, setSpinner] = useState(true)
    const [detalle, setDetalle] = useState({})
    const [sugeridos, setSugeridos] = useState([])
    const router = useRouter()
     const obtenerIphone = async () =>{
         const  {data}  = await axios('https://api.mercadolibre.com/sites/MLA/search?q=categories&limit=1')
        setIphone(data.results)
     }
     const obtenerOferta = async () =>{
         const  {data}  = await axios('https://api.mercadolibre.com/sites/MLA/search?q=iphone12&limit=1')
         setOferta(data.results)
     }
     const obtenerProductos = async () =>{
         const  {data}  = await axios('https://api.mercadolibre.com/sites/MLA/search?q=electronica&limit=20')
         setVistas(data.results)
     }
     const verDetallesGeneral = (id) =>{
        const vistaDetalle = iphone.filter(prod => prod.id == id)
        setDetalle(vistaDetalle[0])
        router.push('/detalles')
     }
     const verDetallesVistas = (id) =>{
        const vistaDetalle = vistas.filter(prod => prod.id == id)
        setDetalle(vistaDetalle[0])
        router.push('/detalles')
     }
     const verDetallesOferta = (id) =>{
        const vistaDetalle = oferta.filter(prod => prod.id == id)
        setDetalle(vistaDetalle[0])
        router.push('/detalles')
     }
     const obtenerOfertaSugeridos = async () =>{
        const  {data}  = await axios('https://api.mercadolibre.com/sites/MLA/search?q=iphone12&limit=10')
        setSugeridos(data.results)
    }
 

     useEffect(()=>{
         obtenerIphone()
         obtenerOferta()
         obtenerProductos()
         obtenerOfertaSugeridos()
         setPaginaLista(true)
         setSpinner(false)
     }, [])
  return (
    <MlContext.Provider
    value={{
        iphone,
        oferta,
        vistas,
        paginaLista,
        spinner,
        verDetallesGeneral,
        verDetallesVistas,
        verDetallesOferta,
        sugeridos,
        detalle
    }}>
        {children}
    </MlContext.Provider>
  )
}
export {
    MlProvider
}

export default MlContext