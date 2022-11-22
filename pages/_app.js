import '../styles/globals.css'
import {MlProvider} from '../context/MlProvider'

function MyApp({ Component, pageProps }) {
  return (
    <MlProvider>

    <Component {...pageProps} />
    </MlProvider>
  )
}

export default MyApp
