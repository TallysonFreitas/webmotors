import styled from 'styled-components'

export const ContainerCarroBuscado = styled.div`
  min-width: 180px;
  height: 224px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  border-radius: 8px;

  a {
    h3 {
      position: absolute;
      left: 16px;
      top: 16px;
      font-size: 16px;
      color: #444;
      font-weight: 600;
      z-index: 1;

      span {
        display: block;
        color: rgb(225, 17, 56);
        font-weight: 800;
      }
    }

    img {
      position: absolute;
      margin: auto;
      top: 40px;
      bottom: 0;
    }
  }
`
