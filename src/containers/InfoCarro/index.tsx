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
import { CarroType } from '../../pages/PaginaVendaVeiculo'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../redux'
import { adicionaFavorito, removeFavorito } from '../../redux/reducers/Favorito'

export type FuncaoAlteraType = (i: string) => void

const InfoCarro = ({ carro }: { carro: CarroType }) => {
  const { favs } = useSelector((state: RootReducer) => state.favoritos)
  const dispatch = useDispatch()
  const nomeDoCarro = `${carro.marca} ${carro.modelo}`

  const [user, setUser] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: 'Olá, tenho interesse no veículo. Por favor entre em contato.',
    whatsapp: true
  })

  function handleChangeName(e: string) {
    setUser({ ...user, nome: e })
  }

  function handleChangeEmail(e: string) {
    setUser({ ...user, email: e })
  }

  function handleChangeTelefone(e: string) {
    setUser({ ...user, telefone: e })
  }

  return (
    <ContainerInfoCarro>
      <ContainerEsquerda>
        {/* Informacoes principais */}
        <InformacoesCarro>
          <CapTitulo>
            <div
              className="fav-button"
              onClick={
                favs.indexOf(nomeDoCarro.toLowerCase()) === -1
                  ? () => {
                      dispatch(adicionaFavorito(nomeDoCarro.toLowerCase()))
                    }
                  : () => {
                      dispatch(removeFavorito(nomeDoCarro.toLowerCase()))
                    }
              }
            >
              {favs.indexOf(nomeDoCarro.toLowerCase()) !== -1 ? (
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
            </div>
            <h1>
              {carro.marca.toUpperCase()}{' '}
              <span>{carro.modelo.toUpperCase()}</span>
              <span>2.0 FREESTYLE PLUS 16V FLEX 4P POWERSHIFT</span>
            </h1>
            <div>
              <TituloSecundario>Cidade</TituloSecundario>
              <TextoForte>{carro.informacoes.cidadeCapital}</TextoForte>
            </div>
            <ul className="lista-info">
              <li>
                <TituloSecundario>Ano</TituloSecundario>
                <TextoForte>{carro.informacoes.ano}</TextoForte>
              </li>
              <li>
                <TituloSecundario>KM</TituloSecundario>
                <TextoForte>{carro.informacoes.KM}</TextoForte>
              </li>
              <li>
                <TituloSecundario>Câmbio</TituloSecundario>
                <TextoForte>{carro.informacoes.cambio}</TextoForte>
              </li>
              <li>
                <TituloSecundario>Carroceria</TituloSecundario>
                <TextoForte>{carro.informacoes.carroceria}</TextoForte>
              </li>
              <li>
                <TituloSecundario>Combustível</TituloSecundario>
                <TextoForte>{carro.informacoes.combustível}</TextoForte>
              </li>
              <li>
                <TituloSecundario>Final de placa</TituloSecundario>
                <TextoForte>{carro.informacoes.finalDePlaca}</TextoForte>
              </li>
              <li>
                <TituloSecundario>Cor</TituloSecundario>
                <TextoForte>{carro.informacoes.cor}</TextoForte>
              </li>
              <li>
                <TituloSecundario>Aceita troca</TituloSecundario>
                <TextoForte>{carro.informacoes.aceitaTroca}</TextoForte>
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
              {carro.PromoCondicoes.carDelivery && (
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
              )}
              {carro.PromoCondicoes.troco && (
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
                      Troque de carro e saia com a diferença em dinheiro para
                      usar como quiser!
                    </p>
                  </div>
                </StatusPlus>
              )}
              {carro.PromoCondicoes.superPreco && (
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
              )}
            </div>
          </CondicoesVeiculo>
          <SobreVeiculo>
            <TituloSecundario>Sobre este carro</TituloSecundario>
            <p>{carro.sobreVeiculo}</p>
          </SobreVeiculo>
        </InformacoesCarro>

        {/* Itens de veiculo */}
        <InformacoesCarro>
          <ItemsVeiculo>
            <TituloSecundario>Itens de veículo</TituloSecundario>
            <ul className="lista-itens">
              {carro.itensVeiculo.map((each) => (
                <TextoForte as={'li'} key={each}>
                  {each}
                </TextoForte>
              ))}
            </ul>
          </ItemsVeiculo>
        </InformacoesCarro>

        {/* Sobre o vendedor */}
        <InformacoesCarro>
          <SobreALoja>
            <TituloSecundario>Sobre o vendedor</TituloSecundario>
            <div className="container-vendedor">
              <div className="loja-container">
                <div className="loja">
                  <LojaIcon img="https://www.webmotors.com.br/assets/img/SellerArea/default-seller-logo.svg"></LojaIcon>
                  <div className="loja__info">
                    <TextoForte>{carro.loja.nome}</TextoForte>
                    <div className="loja__info--localizacao">
                      <img
                        src="https://www.webmotors.com.br/assets/img/icon/icon-location.svg"
                        alt=""
                      />
                      <span>{carro.loja.localizacao}</span>
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

        {/* Compare os Precos */}
        <InformacoesCarro>
          <PrecosVeiculo>
            <TituloSecundario>Compare os precos</TituloSecundario>
            <div className="valores">
              <div>
                <h4>Valor anunciado</h4>
                <strong>
                  {carro.valorAnuncio.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </strong>
              </div>
              <div>
                <img
                  src="https://www.webmotors.com.br/assets/img/icon/brand-webmotors-color.svg?t=2493"
                  alt=""
                />
                <strong>
                  {carro.comparaPrecos.mediaWebMotors.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </strong>
                <h4>
                  Valor médio de carros iguais a este anunciado na Webmotos
                </h4>
              </div>
              <div>
                <h4 className="valores--titulo">fipe</h4>
                <strong>
                  {carro.comparaPrecos.fipe.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </strong>
                <h4>Valor deste carro na Tabela Fipe</h4>
              </div>
            </div>
            <TituloSecundario as={'a'} href="#">
              Consulte aqui {carro.marca.toUpperCase()}{' '}
              {carro.modelo.toUpperCase()} na tabela FIPE Webmotors do seu
              estado.
            </TituloSecundario>
          </PrecosVeiculo>
        </InformacoesCarro>
      </ContainerEsquerda>

      <ContainerFormInteresse>
        <div className="container-valor">
          <strong>
            {carro.valorAnuncio.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0
            })}
          </strong>
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
          type="tel"
          placeholder="Telefone*"
        />
        <textarea
          rows={4}
          value={user.mensagem}
          placeholder="deixe sua mensagem para o vendedor aqui"
          onChange={(e) => {
            setUser({ ...user, mensagem: e.target.value })
          }}
        ></textarea>
        <div className="radial-button">
          <input
            type="checkbox"
            name="whatsapp"
            id="whatsapp"
            checked={user.whatsapp}
            onClick={() => {
              setUser({ ...user, whatsapp: !user.whatsapp })
            }}
          />
          <label htmlFor="whatsapp">
            Quero receber contatos da Webmotors por e-mail, WhatsApp e outros
            canais.
          </label>
        </div>
        <button className="botao-enviar">Enviar Mensagem</button>
      </ContainerFormInteresse>
    </ContainerInfoCarro>
  )
}

export default InfoCarro
