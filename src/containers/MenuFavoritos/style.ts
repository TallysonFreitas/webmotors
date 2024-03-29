import styled from 'styled-components'

export type MenuFavoritosType = {
  ativo: boolean
}

export const ContainerMenuFavoritos = styled.div<MenuFavoritosType>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  padding: 16px;
  overflow: scroll;
  transform: ${(props) =>
    props.ativo ? 'translateX(0vw)' : 'translateX(-100vw)'};
  transition: transform ease 0.2s;

  .container-principal {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 16px;

    .lista-favoritos {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`

export const BotaoFechar = styled.div`
  width: 24px;
  height: 24px;
  position: fixed;
  top: 16px;
  right: 16px;
  font-size: 15px;
  cursor: pointer;

  div:first-child {
    background-color: black;
    width: 100%;
    height: 2px;
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  div:last-child {
    background-color: black;
    width: 100%;
    height: 2px;
    transform: rotate(45deg) translate(5px, 7px);
  }
`
