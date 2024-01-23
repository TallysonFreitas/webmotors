import styled from 'styled-components'

export const ContainerInfoCarro = styled.div`
  display: grid;
  padding: 0 50px;
  margin-top: -45px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1460px;
  grid-template-columns: auto 440px;
  gap: 16px;
  position: relative;
  margin-bottom: 48px;
`

export const InformacoesCarro = styled.div`
  background-color: #ffffff;
  height: 1000px;
  z-index: 1;
  border-radius: 8px;
  box-shadow: 0 2px 9px 0 rgba(158, 184, 209, 0.41);
`

export const ContainerFormInteresse = styled.div`
  background-color: #ffffff;
  height: 600px;
  z-index: 1;
  border-radius: 8px;
  position: sticky;
  top: 0px;
  box-shadow: 0 2px 9px 0 rgba(158, 184, 209, 0.41);
  padding-top: 80px;
`

export const CapTitulo = styled.div`
  padding: 32px 48px 48px;
  border-bottom: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  gap: 24px;

  span:first-child {
    color: #f3123c;
  }

  span:last-child {
    font-size: 14px;
    display: block;
    font-weight: 400;
    color: #6e6e6e;
    letter-spacing: 0.07px;
  }

  .localidade {
    h2 {
      font-size: 12px;
      color: #696977;
      font-weight: 400;
    }

    strong {
      display: flex;
      color: #2e2d37;
      font-size: 16px;
      padding: 0 50px 0 0;
      font-weight: 600;
    }
  }

  .lista-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 16px;

    li {
      h2 {
        font-size: 12px;
        color: #696977;
        font-weight: 400;
      }

      strong {
        display: flex;
        color: #2e2d37;
        font-size: 16px;
        padding: 0 50px 0 0;
        font-weight: 600;
        padding-right: 56px;
      }
    }
  }
`
