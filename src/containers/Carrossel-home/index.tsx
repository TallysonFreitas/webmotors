import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageCarrossel } from './style'

const CarrosselHome = () => {
  return (
    <Swiper className="" slidesPerView={1} navigation autoplay loop>
      <SwiperSlide>
        <a href="https://www.webmotors.com.br/carros/estoque?lkid=2183">
          <ImageCarrossel
            src="https://tpc.googlesyndication.com/simgad/7434839780464587051?"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.webmotors.com.br/financiamento/?lkid=1691">
          <ImageCarrossel
            src="https://tpc.googlesyndication.com/simgad/7444578278502576569?"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://ajuda.webmotors.com.br/hc/pt-br/articles/360038764071-Como-fa%C3%A7o-para-evitar-golpes-ao-vender-">
          <ImageCarrossel
            src="https://tpc.googlesyndication.com/simgad/10205041719707627470?"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.webmotors.com.br/carros/estoque?lkid=2054">
          <ImageCarrossel
            src="https://tpc.googlesyndication.com/simgad/18327656902530545789?"
            alt=""
          />
        </a>
      </SwiperSlide>
    </Swiper>
  )
}

export default CarrosselHome
