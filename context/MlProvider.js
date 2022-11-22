import {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'

const MlContext = createContext()

const MlProvider = ({children}) => {
    const [iphone, setIphone] = useState([])
    const [oferta, setOferta] = useState([])
    const [vistas, setVistas] = useState([])
    const [ubicacion, setUbicacion] = useState('Prado')
    const [paginaLista, setPaginaLista] = useState(false)
    const [spinner, setSpinner] = useState(true)
    const [detalle, setDetalle] = useState({})
    const [sugeridos, setSugeridos] = useState([])
    const [cajaBusqueda, setCajaBusqueda] = useState(false)
    const [resultados, setResultados] = useState([])
    const [datos, setDatos] = useState('celulares')
    const [notificacion, setNotificacion] = useState([{
        agradecimiento: 'Hola Gracias por visitar mi web app', 
        nombre: 'Cleber Dávila',
        profesion: 'Front-end Developer',
        sigueme: '',
        id: 1
      }])
  
    const router = useRouter()

     const obtenerIphone = async () =>{
         const  {data}  = await axios('https://api.mercadolibre.com/sites/MLU/search?q=categories&limit=1')
        setIphone(data.results)
     }
     const obtenerOferta = async () =>{
         const  {data}  = await axios('https://api.mercadolibre.com/sites/MLU/search?q=iphone12&limit=1')
         setOferta(data.results)
     }
     const obtenerProductos = async () =>{
         const  {data}  = await axios('https://api.mercadolibre.com/sites/MLU/search?q=electronica&limit=20')
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
     const verDetalleResultados = (id) =>{
        const vistaDetalle = resultados.filter(prod => prod.id == id)
        setDetalle(vistaDetalle[0])
        router.push('/detalles')
     }
     const verDetallesSugeridos = (id) =>{
        const vistaDetalle = sugeridos.filter(prod => prod.id == id)
        setDetalle(vistaDetalle[0])
        router.push('/detalles')
     }
     const obtenerOfertaSugeridos = async () =>{
        const  {data}  = await axios('https://api.mercadolibre.com/sites/MLU/search?q=iphone12&limit=6')
        setSugeridos(data.results)
    }
    const handleBusqueda = async () =>{
        const  {data}  = await axios(`https://api.mercadolibre.com/sites/MLU/search?q=${datos}&limit=12`)
        setResultados(data.results)
    }
    const abrirBusqueda = () =>{
        setCajaBusqueda(true)
        router.push('/busqueda')
    }
    const cerrarBusqueda = () =>{
        setCajaBusqueda(false)
        router.push('/')
    }
    const eliminarNotificacion = (id)=>{
        const notificacionesActualizadas = notificacion.filter(noti => noti.id !== id)
        setNotificacion(notificacionesActualizadas)
    }
    const obtenerUbicacion = (e) =>{
        e.preventDefault()
        router.push('/')
    }

     useEffect(()=>{
         setTimeout(()=>{
        obtenerIphone()
         obtenerOferta()
         obtenerProductos()
         obtenerOfertaSugeridos()
         setPaginaLista(true)
         handleBusqueda()
         setSpinner(false)
         },1000)
     }, [datos])
  return (
    <MlContext.Provider
    value={{
        iphone,
        oferta,
        vistas,
        paginaLista,
        spinner,
        setSpinner,
        verDetallesGeneral,
        verDetallesVistas,
        verDetallesOferta,
        verDetallesSugeridos,
        verDetalleResultados,
        eliminarNotificacion,
        abrirBusqueda,
        cerrarBusqueda,
        sugeridos,
        detalle,
        resultados,
        setDatos,
        notificacion,
        obtenerUbicacion,
        ubicacion,
        setUbicacion
    }}>
        {children}
    </MlContext.Provider>
  )
}
export {
    MlProvider
}

export default MlContext