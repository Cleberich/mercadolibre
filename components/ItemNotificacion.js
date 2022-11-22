import useMl from '../hooks/useMl'

const ItemNotificacion = ({item}) => {
  const { eliminarNotificacion } = useMl()
  return (
    <div className='bg-white p-4'>
        <h2 className="text-sm">{item.agradecimiento}!</h2>
        <h2 className="text-xs">Mi nombre es <b>{item.nombre}</b></h2>
        <p className="text-xs">Soy {item.profesion} y estoy buscando trabajo</p>
        <p className="text-xs text-verde font-bold">Sería de gran ayuda si puedes compartir mi publicación</p>
        <button onClick={()=>eliminarNotificacion(item.id)} className="text-xs text-blue-500">Eliminar</button>

    </div>
  )
}

export default ItemNotificacion