import styled from 'styled-components'

export const ContainerItemCategoria = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  min-width: 216px;
  height: 216px;
  padding-bottom: -8px;

  a {
    position: absolute;
    inset: 0px;
    z-index: 1000;
  }

  img {
    inset: 0px;
  }
`

export const TituloItemCategoria = styled.h4`
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 24px;
  color: #fff;
  font-weight: 500;
`
