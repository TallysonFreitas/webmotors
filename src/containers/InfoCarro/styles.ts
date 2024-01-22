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

  .titulo {
    padding: 32px;
    border-bottom: 1px solid #dedede;
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
  }
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
