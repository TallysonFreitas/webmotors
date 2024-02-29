import { useSelector } from 'react-redux'
import { BotaoFechar, ContainerMenuFavoritos } from './style'
import { RootReducer } from '../../redux'
import { useEffect, useState } from 'react'
import { CarrosFiltradosType } from '../CarrosBuscados'
import CarroItemRec from '../../components/CarroItemRec'

const MenuFavoritos = ({ visivel }: { visivel: boolean }) => {
  const [containerVisivel, setContainerVisivel] = useState<boolean>(visivel)
  const { favs } = useSelector((state: RootReducer) => state.favoritos)
  const [carros, setCarros] = useState<CarrosFiltradosType[]>([])
  const [carrosFiltrados, setCarrosFiltrados] = useState<CarrosFiltradosType[]>(
    []
  )
  const paginaAtual = window.location.href

  async function CarregaCarros() {
    await fetch('cars.json')
      .then((data) => data.json())
      .then((carros) => {
        setCarros(carros)
      })
  }

  useEffect(() => {
    CarregaCarros()
  }, [])
  useEffect(() => {
    const Filtro = carros.filter((carro) => {
      const carroFavorito = favs.some((e) => {
        if (
          e === `${carro.marca.toLowerCase()} ${carro.modelo.toLowerCase()}`
        ) {
          return true
        }
      })
      if (carroFavorito === true) {
        return carro
      }
    })
    setCarrosFiltrados(Filtro)
  }, [favs, carros])
  useEffect(() => {
    setContainerVisivel(visivel)
  }, [visivel])
  useEffect(() => {
    setContainerVisivel(false)
  }, [paginaAtual])

  return (
    <ContainerMenuFavoritos ativo={containerVisivel}>
      <div className="container-principal">
        <h4>Favoritos</h4>
        <div
          className="lista-favoritos"
          onClick={() => {
            setContainerVisivel(false)
          }}
        >
          {carrosFiltrados.length === 0 ? (
            <>
              <h4>nao ha carros favoritos</h4>
              <p>adicione algum carro aos favoritos e voce o encontrara aqui</p>
            </>
          ) : (
            carrosFiltrados.map((each) => (
              <CarroItemRec
                img={each.imgs}
                anoModelo={`${each.informacoes.ano}`}
                descricao={`${each.sobreVeiculo.slice(0, 80)}...`}
                kmRodado={each.informacoes.KM}
                nome={`${each.marca} ${each.modelo}`}
                valor={each.valorAnuncio}
                localizacao={each.informacoes.cidadeCapital}
                key={each.id}
                link={`${each.link}${each.id}`}
              />
            ))
          )}
        </div>
        <BotaoFechar
          onClick={() => {
            setContainerVisivel(false)
          }}
        >
          <div></div>
          <div></div>
        </BotaoFechar>
      </div>
    </ContainerMenuFavoritos>
  )
}

export default MenuFavoritos
