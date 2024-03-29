import FooterItem from '../../components/FooterItem'
import {
  BoxAtendimento,
  ContainerFooter,
  ContainerLinks,
  CopyrightText,
  SantanderIcon
} from './styles'

const Footer = () => {
  return (
    <ContainerFooter>
      <BoxAtendimento href="#">
        Nossos canais de atendimento são 100% digitais. Precisa de ajuda?
        <span>CLIQUE AQUI</span>
      </BoxAtendimento>
      {/* coluna ou barra de informacoes */}
      <ContainerLinks>
        <div className="container-link">
          <FooterItem titulo="comprar">
            <ul>
              <li>
                <a href="#">Carros usados</a>
              </li>
              <li>
                <a href="#">Carros novos</a>
              </li>
              <li>
                <a href="#">Motos usadas</a>
              </li>
              <li>
                <a href="#">Motos novas</a>
              </li>
              <li>
                <a href="#">Vistoriado</a>
              </li>
            </ul>
          </FooterItem>
          <FooterItem titulo="vender">
            <ul>
              <li>
                <a href="#">Vender carro</a>
              </li>
              <li>
                <a href="#">Vender moto</a>
              </li>
              <li>
                <a href="#">Gerenciar meu anúncio</a>
              </li>
              <li>
                <a href="#">Plataforma revendedores</a>
              </li>
            </ul>
          </FooterItem>
        </div>
        <div className="container-link">
          <FooterItem titulo="Serviços">
            <ul>
              <li>
                <a href="#">Tabela FIPE</a>
              </li>
              <li>
                <a href="#">Financiamento</a>
              </li>
              <li>
                <a href="#">Catálogo 0km</a>
              </li>
              <li>
                <a href="#">Vistoriado</a>
              </li>
              <li>
                <a href="#">Plataorma revendedores</a>
              </li>
              <li>
                <a href="#">Seguro veículo</a>
              </li>
              <li>
                <a href="#">Autoinsights</a>
              </li>
              <li>
                <a href="#">Publicidade</a>
              </li>
              <li>
                <a href="#">Comparar veículos</a>
              </li>
              <li>
                <a href="#">Multas e Débitos</a>
              </li>
            </ul>
          </FooterItem>
        </div>
        <div className="container-link">
          <FooterItem titulo="Notícias WM1">
            <ul>
              <li>
                <a href="#">Portal</a>
              </li>
              <li>
                <a href="#">Últimas notícias</a>
              </li>
              <li>
                <a href="#">Testes</a>
              </li>
              <li>
                <a href="#">Comparativos</a>
              </li>
              <li>
                <a href="#">Vídeos</a>
              </li>
              <li>
                <a href="#">Motos</a>
              </li>
              <li>
                <a href="#">Segredos</a>
              </li>
              <li>
                <a href="#">Dicas</a>
              </li>
              <li>
                <a href="#">Bolso</a>
              </li>
            </ul>
          </FooterItem>
        </div>
        <div className="container-link">
          <FooterItem titulo="Ajuda">
            <ul>
              <li>
                <a href="#">Para você</a>
              </li>
              <li>
                <a href="#">Para a sua loja</a>
              </li>
              <li>
                <a href="#">Segurança</a>
              </li>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Trabalhe com a gente</a>
              </li>
              <li>
                <a href="#">Mapa do site</a>
              </li>
            </ul>
          </FooterItem>
        </div>
        <div className="container-link">
          <FooterItem titulo="Institucional">
            <ul>
              <li>
                <a href="#">Canal de ética</a>
              </li>
              <li>
                <a href="#">Código de conduta Webmotors</a>
              </li>
              <li>
                <a href="#">Código de conduta Fornecedores</a>
              </li>
              <li>
                <a href="#">Código de defesa do Consumidor</a>
              </li>
              <li>
                <a href="#">Gerenciamento de cookies</a>
              </li>
              <li>
                <a href="#">Termos de Uso e Política de privacidade</a>
              </li>
              <li>
                <a href="#">LGPD</a>
              </li>
            </ul>
          </FooterItem>
        </div>
      </ContainerLinks>
      <SantanderIcon as="p">
        Uma empresa{' '}
        <svg
          width="108"
          height="22"
          viewBox="0 0 119 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="_Pzt9N"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.135 7.48916C15.5359 8.14699 15.7364 8.90602 15.7865 9.66506C19.495 10.6265 22.0008 12.7012 21.9507 14.9783C21.9507 18.3181 17.0394 21 10.9754 21C4.91135 21 0 18.3181 0 14.9783C0 12.6 2.55591 10.5253 6.21436 9.56386C6.21436 10.4747 6.41482 11.3855 6.86586 12.1952L10.3239 18.2169C10.5744 18.6723 10.7749 19.1783 10.8751 19.6843L11.0255 19.4313C11.8774 17.9639 11.8774 16.0916 11.0255 14.6241L8.26911 9.81687C7.41714 8.2988 7.41714 6.47711 8.26911 5.00964L8.41945 4.75663C8.51968 5.26265 8.72015 5.76867 8.97073 6.2241L10.5744 9.05783L13.0802 13.4602C13.3308 13.9157 13.5313 14.4217 13.6315 14.9277L13.7818 14.6747C14.6338 13.2072 14.6338 11.3349 13.7818 9.86747L11.0255 5.06024C10.1735 3.59277 10.1735 1.72048 11.0255 0.253012L11.1758 0C11.2761 0.506024 11.4765 1.01205 11.7271 1.46747L15.135 7.48916ZM26.3843 18.0481C26.1411 18.7606 26.0438 19.3205 25.9952 20.1857C27.114 20.7455 28.4761 21 30.0814 21C33.4866 21 35.2379 19.3205 35.2379 16.9284C35.2379 14.8926 34.1677 13.6712 31.6381 12.5515L30.5679 12.0934C29.1572 11.4827 28.3788 10.821 28.3788 9.75225C28.3788 8.63256 29.1572 7.92003 30.9084 7.92003C31.8327 7.92003 33.1461 8.12361 34.2163 8.53077C34.4109 7.92003 34.5569 7.2584 34.6055 6.44408C33.4866 6.03692 32.2705 5.83334 30.9571 5.83334C27.7464 5.83334 26.1411 7.36019 26.1411 9.75225C26.1411 11.9407 27.4059 13.0604 29.3031 13.9256L30.3247 14.3328C32.1732 15.198 32.9515 15.7578 32.9515 16.9793C32.9515 18.2517 31.8813 18.8624 30.0328 18.8624C28.9626 18.8624 27.5032 18.608 26.3843 18.0481ZM46.7913 9.92976V20.1682H44.6542L44.5524 18.9257C43.9418 19.8203 43.0768 20.4167 41.6012 20.4167C38.8536 20.4167 36.9709 18.4286 36.9709 14.9993C36.9709 11.4208 38.9553 9.33335 42.8224 9.33335C44.3489 9.38305 45.621 9.53215 46.7913 9.92976ZM44.4806 11.1865V17.8413C43.8689 18.3055 43.1553 18.6151 42.1869 18.6666C40.148 18.6666 39.2815 17.119 39.2815 14.9524C39.2815 12.5793 40.4029 11.0833 42.7985 11.0833C43.4611 11.0833 44.0218 11.0833 44.4806 11.1865ZM58.3447 13.4006V20.4167H56.0595V13.8074C56.0595 12.1296 55.5008 11.367 53.2155 11.367C52.6569 11.367 52.0475 11.4178 51.3873 11.5195V20.4167H49.102V9.94344C50.5748 9.58755 52.1999 9.33335 53.2663 9.33335C57.1259 9.38419 58.3447 10.8586 58.3447 13.4006ZM66.3333 18.6786C65.889 18.8849 65.2471 18.9881 64.6052 18.9881C63.519 18.9881 62.8772 18.4206 62.8772 17.0794V11.8691H66.2346C66.3333 11.25 66.3827 10.5794 66.4321 9.85715H62.8772V5.83334C62.1859 5.83334 61.3466 5.93652 60.6554 6.19446V17.3889C60.6554 19.9683 62.0378 21 64.2103 21C64.8027 21 65.494 20.8968 66.0864 20.6389C66.1852 20.0199 66.2839 19.2976 66.3333 18.6786ZM76.8301 9.92976V20.1682H74.693L74.5913 18.9257C73.9807 19.8203 73.1157 20.4167 71.6401 20.4167C68.8924 20.4167 67.0097 18.4286 67.0097 14.9993C67.0097 11.4208 68.9942 9.33335 72.8613 9.33335C74.3877 9.38305 75.6089 9.53215 76.8301 9.92976ZM74.5194 11.1865V17.8413C73.9587 18.3055 73.1941 18.6151 72.2257 18.6666C70.1869 18.6666 69.3204 17.119 69.3204 14.9524C69.3204 12.5793 70.4417 11.0833 72.8373 11.0833C73.5 11.0833 74.0606 11.0833 74.5194 11.1865ZM88.3835 13.4006V20.4167H86.0602V13.8074C86.0602 12.1296 85.5046 11.367 83.2318 11.367C82.6762 11.367 82.0701 11.4178 81.4136 11.5195V20.4167H79.1408V9.94344C80.6055 9.58755 82.2217 9.33335 83.2823 9.33335C87.1208 9.38419 88.3835 10.8586 88.3835 13.4006ZM99.937 20.1678V5.83334C99.1777 5.83334 98.3677 5.88312 97.659 6.08221V9.46673C97.1022 9.36719 96.5454 9.31742 95.9379 9.31742C92.0908 9.31742 90.1166 11.4079 90.1166 14.9915C90.1166 18.4258 91.9895 20.4167 94.723 20.4167C96.2417 20.4167 97.1022 19.8194 97.7097 18.8737L97.8109 20.1678H99.937ZM97.6262 17.8413V11.2897C97.0146 11.1865 96.4029 11.0833 95.7913 11.0833C93.4976 11.0833 92.4272 12.5278 92.4272 14.9524C92.4272 17.119 93.2937 18.6666 95.3325 18.6666C96.25 18.6151 97.0146 18.3055 97.6262 17.8413ZM104.011 15.8236H111.389C111.49 15.2245 111.49 14.7252 111.49 14.0263C111.49 11.4302 110.066 9.33335 106.758 9.33335C103.095 9.33335 101.67 11.7797 101.67 14.8251C101.67 18.3198 103.502 20.4167 107.369 20.4167C108.641 20.4167 109.709 20.217 110.778 19.7677C110.886 19.3097 110.968 18.7773 111.043 18.293L111.043 18.2929C111.074 18.0908 111.104 17.8971 111.134 17.7207C110.015 18.2699 108.743 18.5195 107.471 18.5195C105.384 18.5195 104.316 17.6708 104.011 15.8236ZM103.981 14H109.18C109.18 12.1636 108.262 11.0833 106.682 11.0833C105 11.1373 104.133 12.1096 103.981 14ZM118.801 11.4687C118.9 11.0111 119 10.1976 119 9.48587C118.668 9.41808 118.203 9.39549 117.738 9.37289C117.506 9.36159 117.274 9.3503 117.058 9.33335C115.813 9.33335 114.169 9.58755 113.223 9.94344V20.4167H115.464V11.4687C116.012 11.4178 116.56 11.367 117.108 11.367C117.712 11.367 118.186 11.4112 118.691 11.4585L118.801 11.4687Z"
            fill="white"
          ></path>
        </svg>
      </SantanderIcon>
      <CopyrightText as="p">
        © Tallyson Vieira Freitas. Todos os direitos reservados.
      </CopyrightText>
    </ContainerFooter>
  )
}

export default Footer
