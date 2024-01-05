import { ContainerPadrao } from '../../style'
import { BuscaContainer } from './styles'

const Busca = () => {
  return (
    <ContainerPadrao>
      <BuscaContainer>
        <div className="buttons-menu">
          <button>Comprar carros</button>
          <button>Comprar motos</button>
          <button>Quero vender</button>
          <button>Quero financiar</button>
        </div>
        <div className="inputs">
          <input
            type="text"
            name=""
            id=""
            placeholder="Digite marca o modelo do carro"
          />
          <button>VER OFERTAS</button>
        </div>
      </BuscaContainer>
    </ContainerPadrao>
  )
}

export default Busca
