import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import PaginaVendaVeiculo from './PaginaVendaVeiculo'

const rotas = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/comprar-veiculo', Component: PaginaVendaVeiculo }
])

export default rotas
