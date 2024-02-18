import { Swiper, SwiperSlide } from 'swiper/react'
import { ImageCarrossel, ContainerImagemCarrossel } from './style'
import { useEffect, useState } from 'react'

const CarrosselVenda = ({ imgs }: { imgs: string[] }) => {
  const [imagensNoCarrossel, setImagensNoCarrossel] = useState(1)

  useEffect(() => {
    if (window.screen.width >= 640) {
      setImagensNoCarrossel(3)
    } else {
      setImagensNoCarrossel(1)
    }
  }, [])

  return (
    <Swiper slidesPerView={imagensNoCarrossel} navigation loop>
      {imgs.map((each) => (
        <SwiperSlide key={each}>
          <ContainerImagemCarrossel>
            <ImageCarrossel src={each} alt="" />
          </ContainerImagemCarrossel>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default CarrosselVenda
