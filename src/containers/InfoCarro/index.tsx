import { useState } from 'react'
import InputPersonal from '../../components/InputPersonal'
import TableHorario from '../../components/TableHorario'
import {
  CapTitulo,
  CondicoesVeiculo,
  ContainerEsquerda,
  ContainerFormInteresse,
  ContainerInfoCarro,
  IconeInfo,
  InformacoesCarro,
  ItemsVeiculo,
  LojaIcon,
  PrecosVeiculo,
  SobreALoja,
  SobreVeiculo,
  StatusPlus,
  TextoForte,
  TextoInfo,
  TituloSecundario
} from './styles'

const InfoCarro = () => {
  const ItensDoVeiculoObj = [
    'Airbag',
    'Alarme',
    'Ar quente',
    'Banco com regulagem de altura',
    'Computador de bordo',
    'Controle de tração',
    'Desembaçador traseiro',
    'Ar condicionado',
    'Encosto de cabeça traseiro',
    'Freio ABS',
    'Protetor de caçamba',
    'Controle automático de velocidade',
    'Retrovisores elétricos',
    'Rodas de liga leve',
    'Sensor de chuva',
    'Sensor de estacionamento',
    'Retrovisor fotocrômico',
    'Travas elétricas',
    'Vidros elétricos',
    'Volante com regulagem de altura',
    'Capota marítima',
    'Bancos em couro',
    'Tração 4x4',
    'Direção hidráulica'
  ]

  const [user, setUser] = useState({
    nome: '',
    email: '',
    telefone: 0,
    mensagem: 'Olá, tenho interesse no veículo. Por favor entre em contato.',
    whatsapp: true
  })

  function handleChangeName(e: string) {
    setUser({ ...user, nome: e })
  }

  function handleChangeEmail(e: string) {
    setUser({ ...user, email: e })
  }

  function handleChangeTelefone(e: number) {
    setUser({ ...user, telefone: e })
  }

  return (
    <ContainerInfoCarro>
      <ContainerEsquerda>
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
                <TituloSecundario>Final de placa</TituloSecundario>
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
            <TituloSecundario>
              Sobre os diferenciais do anúncio
            </TituloSecundario>
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
            <div className="promo-state">
              <StatusPlus>
                <div className="status-header">
                  <IconeInfo img="https://www.webmotors.com.br/assets/img/stamps/car-delivery.svg" />
                  <TextoForte>CarDelivery</TextoForte>
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
                    <strong>Compre online:</strong> a loja cuida da
                    documentação, você faz o test-drive e recebe o carro em
                    casa!
                  </p>
                </div>
              </StatusPlus>
              <StatusPlus>
                <div className="status-header">
                  <IconeInfo img="https://www.webmotors.com.br/assets/img/stamps/troca-com-troco.svg" />
                  <TextoForte>Troca+Troco</TextoForte>
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
                    Troque de carro e saia com a diferença em dinheiro para usar
                    como quiser!
                  </p>
                </div>
              </StatusPlus>
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
            </div>
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
        <InformacoesCarro>
          <ItemsVeiculo>
            <TituloSecundario>Itens de veículo</TituloSecundario>
            <ul className="lista-itens">
              {ItensDoVeiculoObj.map((each) => (
                <TextoForte as={'li'} key={each}>
                  {each}
                </TextoForte>
              ))}
            </ul>
          </ItemsVeiculo>
        </InformacoesCarro>
        <InformacoesCarro>
          <SobreALoja>
            <TituloSecundario>Sobre o vendedor</TituloSecundario>
            <div className="container-vendedor">
              <div className="loja-container">
                <div className="loja">
                  <LojaIcon img="https://www.webmotors.com.br/assets/img/SellerArea/default-seller-logo.svg"></LojaIcon>
                  <div className="loja__info">
                    <TextoForte>Autop</TextoForte>
                    <div className="loja__info--localizacao">
                      <img
                        src="https://www.webmotors.com.br/assets/img/icon/icon-location.svg"
                        alt=""
                      />
                      <span>Belo Horizonte, MG</span>
                    </div>
                  </div>
                </div>
                <TableHorario />
              </div>
              <div className="conquistas">
                <TextoForte>Conquistas</TextoForte>
                <div className="conquistas__lista">
                  <div className="conquistas__lista--item">
                    <img
                      src="https://www.webmotors.com.br/assets/img/SellerArea/existence-time.png"
                      alt=""
                    />
                    <p>
                      Desde <strong>10/2007</strong> na Webmotors
                    </p>
                  </div>
                  <div className="conquistas__lista--item">
                    <img
                      src="https://www.webmotors.com.br/assets/img/SellerArea/number-ads.png"
                      alt=""
                    />
                    <p>
                      Anunciou <strong>6947</strong> vezes na Webmotors
                    </p>
                  </div>
                  <div className="conquistas__lista--item">
                    <img
                      src="https://www.webmotors.com.br/assets/img/SellerArea/response-time.png"
                      alt=""
                    />
                    <p>
                      Responde em até <strong>19</strong> horas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SobreALoja>
        </InformacoesCarro>
        <InformacoesCarro>
          <PrecosVeiculo>
            <TituloSecundario>Compare os precos</TituloSecundario>
            <div className="valores">
              <div>
                <h4>Valor anunciado</h4>
                <strong>R$ 127.990</strong>
              </div>
              <div>
                <img
                  src="https://www.webmotors.com.br/assets/img/icon/brand-webmotors-color.svg?t=2493"
                  alt=""
                />
                <strong>R$ 152.678</strong>
                <h4>
                  Valor médio de carros iguais a este anunciado na Webmotos
                </h4>
              </div>
              <div>
                <h4 className="valores--titulo">fipe</h4>
                <strong>R$ 130.202</strong>
                <h4>Valor deste carro na Tabela Fipe</h4>
              </div>
            </div>
            <TituloSecundario as={'a'} href="#">
              Consulte aqui TOYOTA COROLLA na tabela FIPE Webmotors do seu
              estado.
            </TituloSecundario>
          </PrecosVeiculo>
        </InformacoesCarro>
      </ContainerEsquerda>

      <ContainerFormInteresse>
        <div className="container-valor">
          <strong>R$ 199.900</strong>
          <button>Ver parcelas</button>
        </div>
        <TituloSecundario>Envie uma mensagem ao vendedor</TituloSecundario>
        <InputPersonal
          muda={handleChangeName}
          valor={user.nome}
          type="text"
          placeholder="Nome*"
        />
        <InputPersonal
          muda={handleChangeEmail}
          valor={user.email}
          type="email"
          placeholder="E-mail*"
        />
        <InputPersonal
          muda={handleChangeTelefone}
          valor={user.telefone}
          type="number"
          placeholder="Telefone*"
        />
      </ContainerFormInteresse>
    </ContainerInfoCarro>
  )
}

export default InfoCarro
