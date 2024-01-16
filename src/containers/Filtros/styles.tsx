import styled from 'styled-components'

export const Filtro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;

  .titulo-filtro {
    font-size: 14px;
    color: #555;
    margin-top: 16px;
  }

  .lojas {
    display: flex;
    gap: 16px;
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
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

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

  .container-scroll {
    display: flex;
    gap: 16px;
    overflow-x: scroll;

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
`
