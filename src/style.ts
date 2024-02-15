import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
  font-family: 'Poppins', sans-serif;
}
body{
  background-color:#ECEDF2;
}`

export const ContainerPadrao = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1440px) {
    padding: 0px 48px;
  }

  @media (max-width: 640px) {
    padding: 0px 12px;
  }
`
