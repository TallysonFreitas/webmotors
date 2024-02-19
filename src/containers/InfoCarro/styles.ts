import styled from 'styled-components'

export type BackgroundImage = { img: string }

export const ContainerInfoCarro = styled.div`
  display: grid;
  padding: 0 50px;
  margin: -45px auto 48px;
  max-width: 1460px;
  grid-template-columns: auto 440px;
  gap: 16px;
  position: relative;

  @media (max-width: 1280px) {
    padding: 0 16px;
    grid-template-columns: auto 300px;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 0px;
  }
`

export const InformacoesCarro = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 9px 0 rgba(158, 184, 209, 0.41);
`

export const ContainerEsquerda = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ItemsVeiculo = styled.div`
  padding: 32px 56px 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .lista-itens {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px 32px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }

    li {
      font-size: 14px;
    }
  }
`

export const ContainerFormInteresse = styled.div`
  background-color: #ffffff;
  height: 560px;
  z-index: 1;
  border-radius: 8px;
  position: sticky;
  top: 131px;
  box-shadow: 0 2px 9px 0 rgba(158, 184, 209, 0.41);
  padding: 32px 32px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .container-valor {
    display: flex;
    margin-bottom: -20px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1280px) {
      flex-direction: column-reverse;
    }

    strong {
      font-size: 40px;
      font-weight: 500;
      letter-spacing: 0.04px;
      color: #2e2d37;
    }
    button {
      background-color: #f3123c;
      padding: 12px;
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;

      @media (max-width: 1280px) {
        margin-bottom: 8px;
        margin-top: -16px;
      }
    }
  }

  textarea {
    width: 100%;
    border-radius: 8px;
    border: 2px solid #dfe0e7;
    color: #000;
    padding: 8px;
    resize: none;

    &:focus {
      outline-color: #8826bb;
    }
  }

  .radial-button {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;

    label {
      font-weight: 300;
      font-size: 12px;
      pointer-events: stroke;
    }

    input {
      border: 2px solid #dfe0e7;
    }
  }

  .botao-enviar {
    background-color: #f3123c;
    padding: 16px;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
`

export const TituloSecundario = styled.h2`
  font-size: 12px;
  color: #696977;
  font-weight: 400;
`

export const TextoForte = styled.strong`
  display: flex;
  color: #2e2d37;
  font-size: 16px;

  font-weight: 600;
`

export const CapTitulo = styled.div`
  padding: 32px 48px 48px;
  border-bottom: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  gap: 24px;

  span:first-child {
    color: #f3123c;
  }

  span:last-child {
    font-size: 14px;
    display: block;
    font-weight: 400;
    color: #6e6e6e;
    letter-spacing: 0.07px;
  }

  .lista-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 16px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }

    strong {
      padding: 0 50px 0 0;
    }
  }
`

export const IconeInfo = styled.div<BackgroundImage>`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 25px;
  height: 49px;
`

export const CondicoesVeiculo = styled.div`
  padding: 36px 40px;
  display: flex;
  flex-direction: column;

  max-height: 240px;
  overflow-y: visible;
  gap: 8px;
  border-bottom: 1px solid #dedede;

  @media (max-width: 1280px) {
    max-height: 800px;
  }

  @media (max-width: 900px) {
    max-height: 600px;
  }

  .promo-state {
    display: flex;
    gap: 16px;

    @media (max-width: 1280px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .videochamada {
    display: flex;
    justify-content: space-between;
    aling-items: center;
    padding: 16px;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
    }

    & > div {
      display: flex;
    }

    .container-texto {
      margin: 0px 16px;
    }
    button {
      color: rgb(255, 255, 255);
      padding: 10px 16px;
      border-radius: 8px;
      background-color: rgb(243, 18, 60);
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-weight: bold;
      font-size: 12px;
      line-height: 150%;
      transition: background-color 0.3s ease 0s;
      cursor: pointer;
      border: none;
      margin: 12px 0px;

      &:hover {
        background-color: rgb(194, 14, 48);
        transition: background-color 0.3s ease 0s;
      }
    }
  }
`

export const StatusPlus = styled.div`
  max-width: 240px;
  width: 100%;
  z-index: 1;
  max-height: 48px;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  transition:
    max-height 0.7s ease 0s,
    opacity 0.7s ease-in 0s,
    box-shadow 0.7s ease-in 0s;

  .status-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 24px;
    position: relative;
    cursor: pointer;
  }

  .dropdown-info {
    padding: 0px 16px;
    opacity: 0;
    max-height: 0px;
    overflow: hidden;
    transition:
      opacity 0.4s ease-in 0s,
      max-height 0.4s ease-in 0s;

    p {
      color: rgb(45, 45, 55);
      line-height: 150%;
      font-weight: normal;
      display: inline;
      font-size: 14px;
      max-width: 60%;

      span {
        font-weight: 600;
      }
    }
  }

  &:hover {
    max-height: 240px;
    height: auto;
    box-shadow: 0px 16px 16px rgba(0, 0, 0, 0.3);
  }

  &:hover .dropdown-info {
    opacity: 1;
    max-height: 100px;
    padding: 16px;
  }
`

export const TextoInfo = styled.p`
  font-size: 16px;
  color: #2e2d37;
  line-height: 24px;
`

export const SobreVeiculo = styled.div`
  padding: 32px 56px;
`

export const SobreALoja = styled.div`
  padding: 32px 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .container-vendedor {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .loja-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .loja {
      boder-right: 2px solid #666677;
      display: flex;
      gap: 24px;

      &__info {
        strong {
          font-size: 20px;
          font-weight: 500;
        }

        &--localizacao {
          display: flex;
          gap: 8px;
          align-items: center;

          img {
            width: 16px;
            height: 16px;
          }

          span {
            font-size: 12px;
          }
        }
      }
    }

    .conquistas {
      display: flex;
      flex-direction: column;
      gap: 16px;

      &__lista {
        display: flex;
        gap: 8px;

        &--item {
          max-width: 100px;
          width: 100%;

          img {
            margin: 0 auto;
            display: block;
            width: 32px;
            height: 32px;
          }
          p {
            font-size: 11px;
            text-align: center;
            color: #696977;
          }
        }
      }
    }
  }
`

export const LojaIcon = styled.div<BackgroundImage>`
  width: 64px;
  height: 40px;
  flex-shrink: 0;
  background: url(${(props) => props.img}) center center no-repeat
    rgb(236, 237, 242);
  border-radius: 8px;
`

export const PrecosVeiculo = styled.div`
  background-color: #2e2d37;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 32px 56px;
  border-radius: 8px;

  .valores {
    display: flex;
    gap: 40px;

    @media (max-width: 1280px) {
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 100px;
    }

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 24px;
    }

    div {
      width: 32%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (max-width: 900px) {
        width: 100%;
      }

      .valores--titulo {
        font-size: 22px;
        font-weight: 600;
        letter-spacing: normal;
      }

      img {
        height: 24px;
      }
      h4 {
        font-weight: 400;
        font-size: 11px;
      }
      strong {
        color: #fff;
        font-size: 28px;
        letter-spacing: 0.14px;
        font-weight: 600;
      }
    }
  }

  h2 {
    color: #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`
