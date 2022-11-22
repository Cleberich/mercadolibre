import Head from 'next/head';
import useMl from "../hooks/useMl"
import ItemResultado from "../components/ItemResultado";
import { useRouter } from 'next/router';

export default function Busqueda() {
    const {cerrarBusqueda, setDatos, resultados}= useMl()
    const router = useRouter()

  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    </Head>
    <main className="bg-amarillo">
       <div className="bg-amarillo py-4 flex justify-between sticky top-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400 mt-2 absolute left-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>  
        <input 
        type='text'
        className='mr-3 ml-3 w-full rounded-2xl py-1 pl-8 input'
        placeholder='Buscar en Mercado Libre'
        autofocus="autofocus"
        onChange={e => setDatos(e.target.value)}
        />
       
        <button onClick={()=>cerrarBusqueda()} className='text-xs mr-4'>Cancelar</button>
    </div>
        <div className="h-screen bg-white">
        <div className='resultados p-3 text-left '>

            {resultados.map(resultado => (
                <ItemResultado 
                key={resultado.id}
                resultado={resultado}
                />
                ))}
  
      </div>
        </div>
    </main>
    </>
  )
}
