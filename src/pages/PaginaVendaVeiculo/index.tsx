import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import { EstiloGlobal } from '../../style'
import { ImageCarrossel } from '../../containers/Carrossel/style'

const PaginaVendaVeiculo = () => {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Swiper className="" slidesPerView={3} navigation autoplay loop>
        <SwiperSlide>
          <ImageCarrossel
            src="https://tpc.googlesyndication.com/simgad/7434839780464587051?"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCarrossel
            src="https://tpc.googlesyndication.com/simgad/7444578278502576569?"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCarrossel
            src="https://tpc.googlesyndication.com/simgad/10205041719707627470?"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <ImageCarrossel
            src="https://tpc.googlesyndication.com/simgad/18327656902530545789?"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </>
  )
}

export default PaginaVendaVeiculo
