import { Swiper, SwiperSlide } from 'swiper/react'
import { ContainerCarroItem } from './styles'

const CarroItemRec = ({
  img,
  nome,
  descricao,
  valor,
  anoModelo,
  kmRodado
}: {
  img: string[]
  nome: string
  descricao: string
  valor: number
  anoModelo: string
  kmRodado: number
}) => {
  return (
    <ContainerCarroItem>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {img.map((each) => (
          <SwiperSlide key={''}>
            <img className="item-carrossel" src={each} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info">
        <h6>{nome}</h6>
        <p>{descricao}</p>
        <h4>R${valor}</h4>
        <div>
          <span>{anoModelo}</span>
          <span>{kmRodado}km</span>
        </div>
      </div>
    </ContainerCarroItem>
  )
}

export default CarroItemRec
