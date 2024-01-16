import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { RouterProvider } from 'react-router-dom'
import rotas from './pages/Rotas'

function App() {
  return <RouterProvider router={rotas} />
}

export default App
