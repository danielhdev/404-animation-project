import '../styles/globals.css'
import '../styles/fonts.css'

import Navbar from '../Components/Navbar'
function MyApp({ Component, pageProps }) {



  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>)
}

export default MyApp
