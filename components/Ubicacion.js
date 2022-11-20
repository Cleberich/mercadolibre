


const Ubicacion = ({setUbi, ubi, setUbicacion}) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
   
    setUbicacion(false)
  }


  return (
    <div className="ubicacion p-3">
        <h2 className="text-2xl">Elige dónde recibir tus <br></br> compras</h2>
        <p className="sm mt-2 text-gray-600">Podrás ver costos y tiempos de entrega precisos en todo lo que busques.</p>
        <form className="mt-3" onSubmit={handleSubmit}>
          <label className="block xs-1 my-1 ml-1 text-gray-600">Departamento</label>
          <select className="w-full">
            <option className="p-2 bg-black">Montevideo</option>
          </select>
          <label className="block xs-1 my-1 ml-1 text-gray-600">Localidad</label>
         
          <select 
                id='categoria'
                type="select"
                className="w-full"
                onChange={e => setUbi(e.target.value)}
            >
                <option value="Prado">Prado</option>
                <option value="Union">Union</option>
                <option value="Centro">Centro</option>
                <option value="Portones">Portones</option>
                <option value="Malvin">Malvin</option>
            </select> 
          <input 
          type='submit'
         
          className="bg-blue-500 w-full p-3 mt-4 font-bold text-white text-center"
          value={'Aceptar'}
          />
        </form>
      </div>
  )
}

export default Ubicacion