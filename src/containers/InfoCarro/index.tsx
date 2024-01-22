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
        </div>
      </InformacoesCarro>
      <ContainerFormInteresse>
        <h1>R$ 51.900</h1>
      </ContainerFormInteresse>
    </ContainerInfoCarro>
  )
}

export default InfoCarro
