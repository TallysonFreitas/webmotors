import styled from 'styled-components'

export const ContainerCarroItem = styled.div`
  min-width: 216px;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;

  .item-carrossel {
    width: 100%;
    height: 160px;
  }

  .card-info {
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  .card-bottom {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #aaa;
    align-items: center;
    padding: 14px 18px;

    span {
      font-size: 12px;
      color: #aaa;
      display: flex;
      align-items: center;

      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`
