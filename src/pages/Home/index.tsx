import { useEffect } from 'react'
import Busca from '../../containers/Busca'
import CarrosselHome from '../../containers/Carrossel-home'
import Filtros from '../../containers/Filtros'
import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import { ContainerPadrao, EstiloGlobal } from '../../style'

const Home = () => {
  useEffect(() => {
    scroll(0, 0)
  }, [])

  return (
    <>
      <EstiloGlobal />
      <Header />
      <CarrosselHome />
      <Busca />
      <ContainerPadrao>
        <Filtros />
      </ContainerPadrao>
      <Footer />
    </>
  )
}

export default Home
