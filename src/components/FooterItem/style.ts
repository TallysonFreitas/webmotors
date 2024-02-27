import styled from 'styled-components'

type BodyDropdownType = {
  ativo: boolean
}

export const HeaderDropdown = styled.div<BodyDropdownType>`
  position: relative;
  h4 {
    font-size: 16px;
    color: #fff;

    @media (max-width: 900px) {
      border-bottom: 1px solid #696977;
      padding: 16px;
    }
  }

  @media (max-width: 900px) {
    &::before {
      content: '${(props) => (props.ativo === true ? '-' : '+')}';
      position: absolute;
      right: 16px;
      color: #fff;
      top: 0px;
      bottom: 0px;
      display: flex;
      align-items: center;
    }
  }
`

export const BodyDropdown = styled.div<BodyDropdownType>`
  max-height: ${(props) => (props.ativo ? '500px' : '0px')};
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 32px;
  background-color: #2e2d37;
  transition: max-height ease 0.5s;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }


  ul {
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 900px) {
      margin-bottom:0px;
      background-color:#696977;
    }


    li {
      max-width: 180px;

      @media (max-width: 900px) {
        max-width: 100%;
      }

      a {
        text-decoration: none;
        font-weight: 300;
        color: #fff;
        font-size: 12px;
        line-height: 0.5;

        @media (max-width: 900px) {
        padding: 16px 32px;
        display:inline-block;
        }
      }
      a:hover {
        text-decoration: underline;
      }
    }

`
