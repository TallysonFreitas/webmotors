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
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`
