import Busca from './containers/Busca'
import Filtros from './containers/Filtros'
import Header from './containers/Header'
import { ContainerPadrao, EstiloGlobal } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Busca />
      <ContainerPadrao>
        <Filtros />
      </ContainerPadrao>
    </>
  )
}

export default App
