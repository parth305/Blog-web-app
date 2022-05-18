import { Provider } from 'react-redux'
import Navbar from '../Components/Navbar'
import Pagestate from '../contextapi/Pagestate'
import store from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Pagestate>
      <Provider store={store}>
        

      <Navbar />
      <Component {...pageProps} />
      </Provider>
      </Pagestate>
    </>
  )
}

export default MyApp
