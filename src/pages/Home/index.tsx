import Busca from '../../containers/Busca'
import Carrossel from '../../containers/Carrossel'
import Filtros from '../../containers/Filtros'
import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import { ContainerPadrao, EstiloGlobal } from '../../style'

const Home = () => {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Carrossel />
      <Busca />
      <ContainerPadrao>
        <Filtros />
      </ContainerPadrao>
      <Footer />
    </>
  )
}

export default Home
