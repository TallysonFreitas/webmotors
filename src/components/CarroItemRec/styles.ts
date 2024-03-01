import styled from 'styled-components'
import { carrosselImgType } from '.'

export const ContainerCarroItem = styled.div`
  min-width: 216px;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 160px;
  }

  .carrossel {
    max-width: 100%;
  }

  .container-bottom {
    @media (max-width: 640px) {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card-info {
      cursor: pointer;
      text-decoration: none;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px 12px;

      @media (max-width: 640px) {
        height: 120px;
      }

      h6 {
        font-weight: 600;
        color: #000;
      }
      p {
        font-size: 12px;
        font-weight: 500;
        color: #999;
        margin-bottom: 24px;

        @media (max-width: 640px) {
          margin-bottom: 8px;
        }

        @media (max-width: 640px) {
          font-size: 10px;
        }
      }
      h4 {
        font-size: 20px;
        font-weight: 500;
        color: #444;

        @media (max-width: 640px) {
          font-size: 14px;
        }
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

      @media (max-width: 640px) {
        padding: 8px 18px;
      }

      span {
        font-size: 11px;
        color: #aaa;
        display: flex;
        align-items: center;

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`

export const CarrosselItem = styled.div<carrosselImgType>`
  width: 100%;
  height: 100%;
  min-height: 178px;
  min-width: 100px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`
