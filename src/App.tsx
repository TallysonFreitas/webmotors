import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const rotas = createBrowserRouter([{ path: '/', Component: Home }])

  return <RouterProvider router={rotas} />
}

export default App
