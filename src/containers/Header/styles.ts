import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  padding: 0px 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  svg {
    width: 145px;
    height: 28px;
  }
  .nav {
    display: flex;

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
        z-index: 1;
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

    li {
      a {
        color: black;
        text-decoration: none;
        display: flex;
        font-weight: semi-bold;
        font-size: 12px;
        svg {
          height: 24px;
          width: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`
