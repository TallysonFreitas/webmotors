import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { RouterProvider } from 'react-router-dom'
import rotas from './pages/Rotas'
import { Provider } from 'react-redux'
import store from './redux'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
