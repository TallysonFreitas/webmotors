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
      li {
        a {
          text-decoration: none;
          color: #fff;
          font-size: 12px;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
