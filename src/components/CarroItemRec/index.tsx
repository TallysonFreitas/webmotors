import { Swiper, SwiperSlide } from 'swiper/react'
import { CarrosselItem, ContainerCarroItem } from './styles'

export type carrosselImgType = { img: string }

const CarroItemRec = ({
  img,
  nome,
  descricao,
  valor,
  anoModelo,
  kmRodado,
  localizacao
}: {
  img: string[]
  nome: string
  descricao: string
  valor: number
  anoModelo: string
  kmRodado: number
  localizacao: string
}) => {
  return (
    <ContainerCarroItem>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {img.map((each) => (
          <SwiperSlide key={''}>
            <CarrosselItem img={each}></CarrosselItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info">
        <h6>{nome}</h6>
        <p>{descricao}</p>
        <h4>
          {valor.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}
        </h4>
        <div>
          <span>{anoModelo}</span>
          <span>{kmRodado}km</span>
        </div>
      </div>
      <div className="card-bottom">
        <span>
          <svg
            className="sc-cxabCf juBXrw MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="LocationOnIcon"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
          </svg>
          {localizacao}
        </span>{' '}
        <span>
          <svg
            className="sc-cxabCf juBXrw MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="FavoriteBorderIcon"
          >
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
          </svg>
        </span>
      </div>
    </ContainerCarroItem>
  )
}

export default CarroItemRec
