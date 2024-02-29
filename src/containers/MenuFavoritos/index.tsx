import { useSelector } from 'react-redux'
import { BotaoFechar, ContainerMenuFavoritos } from './style'
import { RootReducer } from '../../redux'
import { useEffect, useState } from 'react'
import { CarrosFiltradosType } from '../CarrosBuscados'

import FavoritoItem from '../../components/FavoritoItem'

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
            carrosFiltrados.map((carro) => (
              <FavoritoItem
                key={carro.id}
                anoModelo={carro.informacoes.ano}
                descricao={carro.sobreVeiculo.slice(0, 80)}
                img={carro.imgs}
                kmRodado={carro.informacoes.KM}
                link={carro.link}
                localizacao={carro.informacoes.cidadeCapital}
                nome={`${carro.marca} ${carro.modelo}`}
                valor={carro.valorAnuncio}
                id={carro.id}
              ></FavoritoItem>
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
