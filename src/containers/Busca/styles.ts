import styled from 'styled-components'

export const BuscaContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 16px 24px;
  background-color: #fff;
  margin-top: 40px;
  border-radius: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    width: 100%;
  }

  .buttons-menu {
    display: flex;
    gap: 24px;

    .buttons-menu--item {
      background-color: transparent;
      border: none;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      padding: 8px 0;
      border-bottom: 3px solid transparent;
      transition: border-bottom ease 0.2s;
      color: #777;
      text-decoration: none;

      &.active {
        border-bottom: 3px solid #f00;
        color: #000;
      }

      &:hover {
        color: #000;
      }
    }
  }

  .inputs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link {
      background-color: #e00;
      transition: all ease 0.2s;
      width: 20%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: #eee;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;

      &:hover {
        background-color: #a00;
      }
    }

    .input-buscar {
      display: flex;
      width: 70%;
      border-radius: 8px;
      border: 2px solid #ccc;
      font-weight: bold;
      color: #eee;
      position: relative;
      padding: 2px;

      svg {
        width: 5%;
        padding: 8px 8px;
      }

      input {
        width: 95%;
        height: 100%;
        padding: 8px 12px;
        border: none;
        font-weight: 600;
        outline: none;
      }
    }
  }
`
