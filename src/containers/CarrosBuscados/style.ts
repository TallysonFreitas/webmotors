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
  }
`

export const MenuPesquisa = styled.div`
  width: 100%;
  position: absolute;
  top: 63px;
  left: 0px;
  height: 48px;
  background-color: #fff;
`
