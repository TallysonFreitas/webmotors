import styled from 'styled-components'

export const ContainerCarroItem = styled.div`
  width: 15%;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;

  .item-carrossel {
    width: 100%;
    height: 200px;
  }

  .card-info {
    padding: 8px 12px;

    h6 {
      font-weight: 600;
    }
    p {
      font-size: 12px;
      font-weight: 500;
      color: #999;
      margin-bottom: 24px;
    }
    h4 {
      font-size: 20px;
      font-weight: 500;
      color: #444;
    }

    div {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 12px;
        color: #999;
      }
    }
  }
`
