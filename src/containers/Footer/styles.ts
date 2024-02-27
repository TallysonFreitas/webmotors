import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  overflow: hidden;
`

export const ContainerLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;
  background-color: #2e2d37;
  padding: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0px;
    padding: 0px;
  }
`

export const BoxAtendimento = styled.a`
  display: block;
  width: 100%;
  background-color: #e11138;
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  padding: 16px;
  text-align: center;

  span {
    font-weight: 700;
    margin-left: 4px;
  }
`

export const SantanderIcon = styled(BoxAtendimento)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    height: 22px;
    margin-top: -6px;
  }
`

export const CopyrightText = styled(BoxAtendimento)`
  background-color: #2e2d37;
`
