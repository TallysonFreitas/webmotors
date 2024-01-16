import styled from 'styled-components'

export type imagemContainertype = { img: string }

export const ContainerNoticiaItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  min-width: 176px;
  overflow: hidden;

  .infos {
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 134px;

    .textos {
      h5 {
        color: #666;
        font-size: 10px;
        margin-bottom: 4px;

        span {
          color: #f44;
        }
      }

      p {
        font-size: 12px;
        font-weight: 500;
      }
    }

    .autor {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      p {
        font-size: 10px;
        max-width: 70%;
      }
    }
  }
`

export const ImagemContainer = styled.div<imagemContainertype>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 152px;
`
