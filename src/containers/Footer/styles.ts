import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 32px;
  background-color: #2e2d37;

  div {
    padding: 40px;
    h4 {
      font-size: 16px;
      color: #fff;
      margin-bottom: 8px;
    }
    ul {
      margin-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      li {
        max-width: 180px;
        a {
          text-decoration: none;
          font-weight: 300;
          color: #fff;
          font-size: 12px;
          line-height: 0px;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
