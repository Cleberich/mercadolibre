import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import Portada from '../components/Portada'
import Anuncio from '../components/Anuncio'
import ImagenAnuncio from '../components/ImagenAnuncio'
import ContenedorProductos from '../components/ContenedorProductos'
import Categorias from '../components/Categorias'


export default function Home() {
  return (
    <>
      <Layout
      title={'MercadoLibre - Inicio'}
      >
        <Portada/>
        <Anuncio/>
        <Categorias/>
        <ImagenAnuncio/>
        <ContenedorProductos/>
      </Layout>
    </>
  )
}
