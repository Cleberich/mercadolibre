import { formatearDinero } from "../helpers"
import useMl from "../hooks/useMl"

const Sugeridos = ({sugerido}) => {

    const {title, price, thumbnail, id} = sugerido
    const {verDetallesOferta} = useMl()
  return (
    <div className="bg-white pl-3 card shadow-2xl m-2 rounded-md"  onClick={()=>verDetallesOferta(id)}>
        <div>
            <img className="w-72 mx-auto p-3" alt={title} src={thumbnail}/>
        </div>
        <hr></hr>
        <h2 className=''>{formatearDinero(price)} <span className='text-verde text-xs my-auto'>12% OFF</span></h2>
        <p className="text-verde text-xs font-light">10 x {formatearDinero(price/10)} sin interés</p>
        <p className="text-verde xs font-bold">Envio gratis</p>
        <p className="xs-1 font-light">{title}</p>
    </div>
  )
}

export default Sugeridos