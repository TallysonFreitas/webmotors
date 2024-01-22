import {
  ContainerFormInteresse,
  ContainerInfoCarro,
  InformacoesCarro
} from './styles'

const InfoCarro = () => {
  return (
    <ContainerInfoCarro>
      <InformacoesCarro>
        <div className="titulo">
          <h1>
            FORD <span>ECOSPORT</span>
            <span>2.0 FREESTYLE PLUS 16V FLEX 4P POWERSHIFT</span>
          </h1>
          <div className="localidade">
            <h2>Cidade</h2>
            <strong>São Bernado do Campo - SP</strong>
          </div>
          <ul className="lista-info">
            <li>
              <h2>Ano</h2>
              <strong>2015/2015</strong>
            </li>
            <li>
              <h2>KM</h2>
              <strong>94.679</strong>
            </li>
            <li>
              <h2>Câmbio</h2>
              <strong>Semi-automático</strong>
            </li>
            <li>
              <h2>Carroceria</h2>
              <strong>Utilitário esportivo</strong>
            </li>
            <li>
              <h2>Combustível</h2>
              <strong>Gasolina e álcool</strong>
            </li>
            <li>
              <h2>FFinal de placa</h2>
              <strong>8</strong>
            </li>
            <li>
              <h2>Cor</h2>
              <strong>Prata</strong>
            </li>
            <li>
              <h2>Aceita troca</h2>
              <strong>Sim</strong>
            </li>
          </ul>
        </div>
      </InformacoesCarro>
      <ContainerFormInteresse>
        <h1>R$ 51.900</h1>
      </ContainerFormInteresse>
    </ContainerInfoCarro>
  )
}

export default InfoCarro
