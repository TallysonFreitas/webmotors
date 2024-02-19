import styled from 'styled-components'

export const ContainerInput = styled.div`
  position: relative;

  .class-input {
    width: 100%;
    border-radius: 8px;
    border: 2px solid #dfe0e7;
    color: #000;
    padding: 8px;

    &:focus ~ .class-label {
      transform: translateY(-16px);
      font-size: 10px;
      color: #8826bb;
    }

    &:valid ~ .class-label {
      transform: translate(144px, -20px);
      font-size: 10px;
      color: #000;

      .valid-icon {
        display: block;
      }
    }

    &:focus {
      outline-color: #8826bb;
    }
  }

  .class-label {
    position: absolute;
    display: flex;
    gap: 8px;
    margin: auto 0;
    top: 10px;
    left: 16px;
    font-size: 12px;
    font-weight: 400;
    background-color: #fff;
    transition: all ease 0.2s;
    color: #b6aeba;
    border-radius: 8px;
    padding: 2px;
    pointer-events: none;

    .valid-icon {
      display: none;
      width: 12px;
      height: 8px;
      border-bottom: 2px solid green;
      border-left: 2px solid green;
      transform: rotate(-45deg);
    }
  }
`
