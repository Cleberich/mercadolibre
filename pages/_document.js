import { Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
        <Head>
            <title>Somos MercadoLibre</title>
            <meta name='description' content='¡Empresa lider de ecommerce en latinoamerica'/>
            <meta name='description' content='Todo lo que buscas lo encontras aca'/>
            <meta charset="utf-8"/>
        </Head>
        <body className='bg-amarillo'>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}
