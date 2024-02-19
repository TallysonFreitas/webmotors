import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageCarrossel, SourceCarrossel } from './style'

const CarrosselHome = () => {
  return (
    <Swiper className="" slidesPerView={1} navigation autoplay loop>
      <SwiperSlide>
        <a href="#">
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
        <a href="#">
          <picture>
            <SourceCarrossel
              srcSet="https://tpc.googlesyndication.com/simgad/4662779424105084691?"
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
        <a href="#">
          <picture>
            <SourceCarrossel
              srcSet="https://tpc.googlesyndication.com/simgad/7444578278502576569?"
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
        <a href="#">
          <picture>
            <SourceCarrossel
              srcSet="https://tpc.googlesyndication.com/simgad/11789951457176907740?"
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
