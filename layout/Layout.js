import Head from "next/head"
import BarraInferior from "../components/BarraInferior"
import Header from "../components/Header"

export default function Layout({children}) {
  return (
    <>
        <Head>
            <meta charset="utf-8"/>
            <title>Mercado Libre</title>
            <meta name="description" content="En MercadoLibre encontras todo lo que buscas, articulos de hogar, jardin, electrodomesticos,celulares, electronica, tecnologia, indumentaria y más"/>
        </Head>
        <body className="bg-amarillo">
            <Header/>
            {children}
            <BarraInferior/>
        </body>
    </>
  )
}
