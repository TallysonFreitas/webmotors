import styled from 'styled-components'

export const Filtro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    color: #555;
  }

  .lojas {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;

    div {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding: 16px;
        height: 100%;
        width: 100%;

        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`
