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

    li {
      padding: 18px 16px;
      transition: border-bottom ease 0.1s;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid #f00;
      }

      a {
        font-weight: semi-bold;
        font-size: 12px;
        padding: 50% 0;
        color: #000;
        text-decoration: none;
      }
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
