import { Swiper, SwiperSlide } from 'swiper/react'
import { CarrosselItem, ContainerCarroItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { adicionaFavorito, removeFavorito } from '../../redux/reducers/Favorito'
import { RootReducer } from '../../redux'
import { useNavigate } from 'react-router-dom'

export type carrosselImgType = { img: string }

const CarroItemRec = ({
  img,
  nome,
  descricao,
  valor,
  anoModelo,
  kmRodado,
  localizacao,
  link
}: {
  img: string[]
  nome: string
  descricao: string
  valor: number
  anoModelo: string
  kmRodado: number
  localizacao: string
  link: string
}) => {
  const dispatch = useDispatch()
  const { favs } = useSelector((state: RootReducer) => state.favoritos)
  const navigate = useNavigate()

  return (
    <ContainerCarroItem>
      <Swiper
        className="carrossel"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {img.map((each) => (
          <SwiperSlide key={each}>
            <CarrosselItem
              onClick={() => {
                navigate(link)
              }}
              img={each}
            ></CarrosselItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container-bottom">
        <a
          onClick={() => {
            navigate(link)
          }}
          className="card-info"
        >
          <h6>{nome.toUpperCase()}</h6>
          <p>{descricao.slice(0, 60)}</p>
          <h4>
            {valor.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </h4>
          <div>
            <span>{anoModelo}</span>
            <span>
              {kmRodado.toLocaleString('pt-br', { minimumFractionDigits: 0 })}{' '}
              km
            </span>
          </div>
        </a>
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
          <span
            onClick={
              favs.indexOf(nome.toLowerCase()) === -1
                ? () => {
                    dispatch(adicionaFavorito(nome.toLowerCase()))
                  }
                : () => {
                    dispatch(removeFavorito(nome.toLowerCase()))
                  }
            }
          >
            {favs.indexOf(nome.toLowerCase()) !== -1 ? (
              <svg
                className="sc-bXCLTC fFjeJu MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FavoriteIcon"
                fill="#f44"
              >
                <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"></path>
              </svg>
            ) : (
              <svg
                className="sc-cxabCf juBXrw MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FavoriteBorderIcon"
              >
                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
              </svg>
            )}
          </span>
        </div>
      </div>
    </ContainerCarroItem>
  )
}

export default CarroItemRec
