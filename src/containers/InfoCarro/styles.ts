import styled from 'styled-components'

export type BackgroundImage = { img: string }

export const ContainerInfoCarro = styled.div`
  display: grid;
  padding: 0 50px;
  margin-top: -45px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1460px;
  grid-template-columns: auto 440px;
  gap: 16px;
  position: relative;
  margin-bottom: 48px;
`

export const InformacoesCarro = styled.div`
  background-color: #ffffff;
  height: 1000px;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 2px 9px 0 rgba(158, 184, 209, 0.41);
`

export const ContainerFormInteresse = styled.div`
  background-color: #ffffff;
  height: 600px;
  z-index: 1;
  border-radius: 8px;
  position: sticky;
  top: 131px;
  box-shadow: 0 2px 9px 0 rgba(158, 184, 209, 0.41);
  padding-top: 80px;
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
  height: 100%;
  max-height: 240px;
  overflow-y: visible;
  gap: 8px;
  border-bottom: 1px solid #dedede;

  .videochamada {
    display: flex;
    justify-content: space-between;
    aling-items: center;
    padding: 16px;

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
      opacity 0.1s ease-in 0s,
      max-height 0.1s ease-in 0s;

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
    height: 240px;
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
