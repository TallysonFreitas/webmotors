import styled from 'styled-components'

export type MenuCelularType = {
  ativo: boolean
}

export const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  padding: 0px 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 10;

  .logo {
    width: 145px;
    height: 28px;

    svg {
      width: 145px;
      height: 28px;
    }
  }
  .nav {
    display: flex;

    @media (max-width: 640px) {
      display: none;
    }

    .dropdown {
      padding: 22px 16px;
      transition: border-bottom ease 0.2s;
      border-bottom: 2px solid transparent;
      font-weight: 500;
      font-size: 12px;
      color: #000;
      cursor: default;
      position: relative;
      cursor: pointer;

      &:hover {
        border-bottom: 2px solid #f00;
      }

      .dropdown-menu {
        position: absolute;
        left: 0;
        background-color: #fff;
        display: none;
        z-index: 3;
        margin-top: 24px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
      }

      .dropdown-menu a {
        display: flex;
        justify-content: left;
        gap: 8px;
        text-decoration: none;
        color: #000;
        padding: 16px 8px 16px 24px;
        text-align: left;
        width: 240px;

        svg {
          width: 25px;
          height: 22px;
        }
      }

      .dropdown-menu a:hover {
        background-color: #ecedf2;
      }
    }

    .dropdown:hover .dropdown-menu {
      display: block;
    }
  }

  .conta {
    display: flex;
    border-left: 1px solid #aaa;
    height: 100%;
    align-items: center;
    padding-left: 16px;
    gap: 24px;

    li:first-child {
      @media (max-width: 640px) {
        display: none;
      }
    }

    li:last-child {
      @media (min-width: 641px) {
        display: none;
      }
    }

    li {
      a {
        color: black;
        text-decoration: none;
        display: flex;
        font-weight: semi-bold;
        font-size: 12px;
        align-items: center;
        gap: 2px;

        svg {
          height: 24px;
          width: 24px;
          display: flex;
          justify-content: center;
          align-items: center;

          path {
            height: 24px;
            width: 24px;
          }
        }
      }
    }
  }
`

export const MenuCelular = styled.div<MenuCelularType>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  transition: all ease 0.5s;
  transform: ${(props) =>
    props.ativo ? 'translateX(0vw)' : 'translateX(100vw)'};

  @media (min-width: 641px) {
    display: none;
  }

  .header-menu {
    display: flex;
    align-items: center;
    background-color: #2e2d37;
    padding: 24px 16px;
    gap: 16px;
    position: relative;

    h2 {
      font-size: 16px;
      font-weight: 500;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  .titulo-menu {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    margin: 16px;
  }
`

export const LinkDropdown = styled.ul`
  width: 100%;
`

export const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 15px;
  margin-top: 0;
  margin-right: 0;

  div:first-child {
    background-color: white;
    width: 100%;
    height: 2px;
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  div:last-child {
    background-color: white;
    width: 100%;
    height: 2px;
    transform: rotate(45deg) translate(5px, 7px);
  }
`
