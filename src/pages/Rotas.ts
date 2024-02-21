import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import PaginaVendaVeiculo from './PaginaVendaVeiculo'
import PesquisarVeiculo from './PesquisarVeiculo'

const rotas = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/comprar-veiculo', Component: PaginaVendaVeiculo },
  { path: '/pesquisar-veiculo', Component: PesquisarVeiculo }
])

export default rotas
