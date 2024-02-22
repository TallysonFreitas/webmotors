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
`

export const InputBuscar = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #aaaaaa;
  font-weight: 500;
`
