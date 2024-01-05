import styled from 'styled-components'

export const BuscaContainer = styled.div`
  width: 80%;
  padding: 16px 24px;
  background-color: #fff;
  margin-top: 40px;
  border-radius: 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;

  .buttons-menu {
    display: flex;
    gap: 24px;

    button {
      background-color: transparent;
      border: none;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      padding: 8px 0;
      border-bottom: 3px solid transparent;
      transition: border-bottom ease 0.2s;
      color: #777;

      &:focus {
        border-bottom: 3px solid #f00;
        color: #000;
      }
    }
  }

  .inputs {
    input {
      padding: 12px;
      width: 70%;
      border-radius: 8px;
      border: 2px solid #ccc;
      font-weight: bold;
      color: #eee;
      position: relative;

      &::before {
        content: '11111111111111111';
        position: absolute;
        margin: auto 0;
        left: 0;
        bottom: 0;
      }
    }
  }
`
