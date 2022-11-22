import { formatearDinero, formatearDineroUSD } from "../helpers"
import useMl from "../hooks/useMl"

const Sugeridos = ({sugerido}) => {

    const {title, price, thumbnail, id} = sugerido
    const {verDetallesSugeridos} = useMl()

  return (
    <div className="bg-white pl-3 card shadow-2xl m-2 rounded-md pb-36" onClick={()=>verDetallesSugeridos(id)}>
        <div>
            <img className="w-72 mx-auto p-3" alt={title} src={thumbnail}/>
        </div>
        <hr></hr>
        <h2 className=''>{formatearDineroUSD(price)} <span className='text-verde text-xs my-auto'>28% OFF</span></h2>
        <p className="text-verde text-xs font-light">12 x {formatearDineroUSD(price/12)} sin interés</p>
        <p className="text-verde xs font-bold">Envio gratis</p>
        <p className="xs-1 font-light">{title}</p>
    </div>
  )
}

export default Sugeridos