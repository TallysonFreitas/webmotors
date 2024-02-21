import CarrosBuscados from '../../containers/CarrosBuscados'
import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import { EstiloGlobal } from '../../style'

const PesquisarVeiculo = () => {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <CarrosBuscados />
      <Footer />
    </>
  )
}

export default PesquisarVeiculo
