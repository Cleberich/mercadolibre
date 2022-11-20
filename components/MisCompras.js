import Layout from '../layout/Layout'
import Image from 'next/image'
import BarraInferior from './BarraInferior'
import { useRouter } from 'next/router'

const MisCompras = () => {
    const router = useRouter()
  return (
    <>
    <div className=' misCompras'>
        <div className='bg-amarillo p-4'>
            <h2 className='text-center'>Mis compras</h2>
        </div>
        <div>
            <Image 
            className='pt-20 mx-auto'
            src='/img/sinCompras.jpeg'
            alt="sin compras aun"
            height={200}
            width={200}
            />
        </div>
        <h2 className='text-center font-light'>¡Haz tu primera compra!</h2>
        <p className='text-center font-light mt-4 text-sm px-12'>Aquí podrás ver tus compras y hacer el seguimiento de tus envíos.</p>
       <div className='block text-center mt-5'>
       <button onClick={()=>{router.push('/')}} className='text-blue-500 text-sm'>Ver ofertas del día</button>
       </div>
    </div>
    <BarraInferior/>
    </>
  )
}

export default MisCompras