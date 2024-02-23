import styled from 'styled-components'

export const ContainerCarrosBuscados = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  margin-top: 111px;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    padding: 40px 8px;
  }
`

export const MenuPesquisa = styled.div`
  width: 100%;
  position: absolute;
  top: 63px;
  left: 0px;
  padding: 16px;
  background-color: #fff;
  display: flex;
  justify-content: center;

  div {
    position: relative;

    div {
      content: '';
      position: absolute;
      left: 8px;
      mouse-event: none;
      top: 0px;
      bottom: 0px;
      bottom: 0px;
      margin: auto 0;
      background-image: url(https://www.webmotors.com.br/assets/img/icon/search.svg?t=9513);
      background-size: 24px 24px;
      background-repeat: no-repeat;
      width: 24px;
      height: 24px;
    }
  }
`

export const InputBuscar = styled.input`
  padding: 8px 16px 8px 32px;
  border-radius: 8px;
  min-width: 400px;
  border: 2px solid #dddddd;
  font-weight: 600;
`
