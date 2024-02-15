import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageCarrossel, SourceCarrossel } from './style'

const CarrosselHome = () => {
  return (
    <Swiper className="" slidesPerView={1} navigation autoplay loop>
      <SwiperSlide>
        <a href="https://www.webmotors.com.br/carros/estoque?lkid=2183">
          <picture>
            <SourceCarrossel
              srcSet="https://tpc.googlesyndication.com/simgad/7434839780464587051?"
              media="(min-width: 641px)"
            />
            <ImageCarrossel
              src="https://tpc.googlesyndication.com/simgad/1853439400975895390?"
              alt=""
            />
          </picture>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.webmotors.com.br/financiamento/?lkid=1691">
          <picture>
            <SourceCarrossel
              srcSet="https://tpc.googlesyndication.com/simgad/7434839780464587051?"
              media="(min-width: 641px)"
            />
            <ImageCarrossel
              src="https://tpc.googlesyndication.com/simgad/1853439400975895390?"
              alt=""
            />
          </picture>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://ajuda.webmotors.com.br/hc/pt-br/articles/360038764071-Como-fa%C3%A7o-para-evitar-golpes-ao-vender-">
          <picture>
            <SourceCarrossel
              srcSet="https://tpc.googlesyndication.com/simgad/7434839780464587051?"
              media="(min-width: 641px)"
            />
            <ImageCarrossel
              src="https://tpc.googlesyndication.com/simgad/1853439400975895390?"
              alt=""
            />
          </picture>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.webmotors.com.br/carros/estoque?lkid=2054">
          <picture>
            <SourceCarrossel
              srcSet="https://tpc.googlesyndication.com/simgad/7434839780464587051?"
              media="(min-width: 641px)"
            />
            <ImageCarrossel
              src="https://tpc.googlesyndication.com/simgad/1853439400975895390?"
              alt=""
            />
          </picture>
        </a>
      </SwiperSlide>
    </Swiper>
  )
}

export default CarrosselHome
