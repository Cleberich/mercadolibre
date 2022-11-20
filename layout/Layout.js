import Head from "next/head"
import BarraInferior from "../components/BarraInferior"
import Header from "../components/Header"

export default function Layout({children}) {
  return (
    <>
        <Head>
            <title>Mercado Libre</title>

        </Head>
        <body className="bg-gris">
            <Header/>
            {children}
            <BarraInferior/>
        </body>
    </>
  )
}
