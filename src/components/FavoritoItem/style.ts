import styled from 'styled-components'

export type BackgroundImageType = { image: string }

export const ContainerFavoritoItem = styled.div`
  padding: 8px 0px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: flex;

  .card-bottom {
    padding: 8px 16px;
    .infos {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 8px 0px;

      span {
        font-size: 10px;
      }
    }
    h6 {
      font-weight: 500;
    }
    p {
      font-size: 10px;
    }
  }
`

export const BackgroundImage = styled.div<BackgroundImageType>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100px;
  min-width: 144px;
`
