import Busca from './containers/Busca'
import Filtros from './containers/Filtros'
import Header from './containers/Header'
import { ContainerPadrao, EstiloGlobal } from './style'
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Carrossel from './containers/Carrossel'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Carrossel />
      <Busca />
      <ContainerPadrao>
        <Filtros />
      </ContainerPadrao>
    </>
  )
}

export default App
