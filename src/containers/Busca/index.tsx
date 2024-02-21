import { useState } from 'react'
import { ContainerPadrao } from '../../style'
import { BuscaContainer } from './styles'
import { useDispatch } from 'react-redux'
import { alteraTermo } from '../../redux/reducers/Filtro'
import { useNavigate } from 'react-router-dom'

const Busca = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [buscandoCarros, setBuscandoCarros] = useState(true)
  const [pesquisar, setPesquisar] = useState('')

  return (
    <ContainerPadrao>
      <BuscaContainer>
        <div className="buttons-menu">
          {buscandoCarros === true ? (
            <>
              <h2 className="buttons-menu--item active">
                Comprar <span>carros</span>
              </h2>
              <h2
                className="buttons-menu--item"
                onClick={() => {
                  setBuscandoCarros(!buscandoCarros)
                }}
              >
                Comprar <span>motos</span>
              </h2>
            </>
          ) : (
            <>
              <h2
                className="buttons-menu--item"
                onClick={() => {
                  setBuscandoCarros(!buscandoCarros)
                }}
              >
                Comprar <span>carros</span>
              </h2>
              <h2 className="buttons-menu--item active">
                Comprar <span>motos</span>
              </h2>
            </>
          )}
          <a
            href="https://www.webmotors.com.br/carros/estoque?lkid=2054"
            className="buttons-menu--item"
          >
            Quero vender
          </a>
          <a
            href="https://www.webmotors.com.br/financiamento?lkid=1021&inst=homesearchbox%3Awebmotors%3Aheader-deslogado%3A%3Afinanciamento"
            className="buttons-menu--item"
          >
            Quero financiar
          </a>
        </div>
        <div className="inputs">
          <div className="input-buscar">
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SearchIcon"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input
              value={pesquisar}
              onChange={(e) => {
                setPesquisar(e.target.value)
              }}
              type="text"
              placeholder={
                buscandoCarros === true
                  ? 'Digite marca ou modelo do carro'
                  : 'Digite marca ou modelo da moto'
              }
            />
          </div>
          <a
            className="link"
            onClick={() => {
              dispatch(alteraTermo(pesquisar)), navigate('/pesquisar-veiculo')
            }}
          >
            VER OFERTAS{buscandoCarros === true ? '(400.897)' : '(41.322)'}
          </a>
        </div>
      </BuscaContainer>
    </ContainerPadrao>
  )
}

export default Busca
