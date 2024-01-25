import {
  CapTitulo,
  CondicoesVeiculo,
  ContainerFormInteresse,
  ContainerInfoCarro,
  IconeInfo,
  InformacoesCarro,
  SobreVeiculo,
  StatusPlus,
  TextoForte,
  TextoInfo,
  TituloSecundario
} from './styles'

const InfoCarro = () => {
  return (
    <ContainerInfoCarro>
      <InformacoesCarro>
        <CapTitulo>
          <h1>
            FORD <span>ECOSPORT</span>
            <span>2.0 FREESTYLE PLUS 16V FLEX 4P POWERSHIFT</span>
          </h1>
          <div>
            <TituloSecundario>Cidade</TituloSecundario>
            <TextoForte>São Bernado do Campo - SP</TextoForte>
          </div>
          <ul className="lista-info">
            <li>
              <TituloSecundario>Ano</TituloSecundario>
              <TextoForte>2015/2015</TextoForte>
            </li>
            <li>
              <TituloSecundario>KM</TituloSecundario>
              <TextoForte>94.679</TextoForte>
            </li>
            <li>
              <TituloSecundario>Câmbio</TituloSecundario>
              <TextoForte>Semi-automático</TextoForte>
            </li>
            <li>
              <TituloSecundario>Carroceria</TituloSecundario>
              <TextoForte>Utilitário esportivo</TextoForte>
            </li>
            <li>
              <TituloSecundario>Combustível</TituloSecundario>
              <TextoForte>Gasolina e álcool</TextoForte>
            </li>
            <li>
              <TituloSecundario>FFinal de placa</TituloSecundario>
              <TextoForte>8</TextoForte>
            </li>
            <li>
              <TituloSecundario>Cor</TituloSecundario>
              <TextoForte>Prata</TextoForte>
            </li>
            <li>
              <TituloSecundario>Aceita troca</TituloSecundario>
              <TextoForte>Sim</TextoForte>
            </li>
          </ul>
        </CapTitulo>
        <CondicoesVeiculo>
          <TituloSecundario>Sobre os diferenciais do anúncio</TituloSecundario>
          <div className="videochamada">
            <div>
              <IconeInfo img="https://www.webmotors.com.br/assets/img/stamps/video-chamada.svg" />
              <div className="container-texto">
                <TextoForte>Videochamada</TextoForte>
                <TextoInfo>
                  Agenda um horário para ver o carro em vídeo
                </TextoInfo>
              </div>
            </div>
            <button>Agendar videochamada</button>
          </div>
          <StatusPlus>
            <div className="status-header">
              <IconeInfo img="https://www.webmotors.com.br/assets/img/stamps/super-preco.svg" />
              <TextoForte>Super Preço</TextoForte>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.7072 10.2071L12.7073 15.2071C12.3163 15.5981 11.6842 15.5981 11.2933 15.2071L6.29325 10.2071C5.90225 9.81612 5.90225 9.18412 6.29325 8.79312C6.68425 8.40212 7.31625 8.40212 7.70725 8.79312L12.0002 13.0861L16.2933 8.79312C16.6842 8.40212 17.3162 8.40212 17.7072 8.79312C17.9022 8.98812 18.0002 9.24412 18.0002 9.50012C18.0002 9.75612 17.9022 10.0121 17.7072 10.2071Z"
                  fill="#2E2D37"
                ></path>
              </svg>
            </div>
            <div className="dropdown-info">
              <p>
                Anúncio com preço <strong>abaixo da tabela FIPE</strong>.
                Aproveite e faça um ótimo negócio!
              </p>
            </div>
          </StatusPlus>
        </CondicoesVeiculo>
        <SobreVeiculo>
          <TituloSecundario>Sobre este carro</TituloSecundario>
          <p>
            Se você está buscando um novo carro, não se arrisque e compre na
            Localiza Seminovos: carros com 360 itens verificados, garantia e
            procedência. Aqui você encontra a maior variedade de modelos do
            mercado, condições únicas de financiamento, entrada facilitada em
            até 10 vezes sem juros, carros revisados e com garantia de
            quilometragem real. Viabilizamos a troca do seu carro usado e
            entregamos seu novo carro na segurança de sua casa! Agende já seu
            atendimento.
          </p>
        </SobreVeiculo>
      </InformacoesCarro>
      <ContainerFormInteresse>
        <h1>R$ 51.900</h1>
      </ContainerFormInteresse>
    </ContainerInfoCarro>
  )
}

export default InfoCarro
