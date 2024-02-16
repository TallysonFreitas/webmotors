import styled from 'styled-components'

export type DropDownType = {
  ativo: boolean
}

export const ItemDropdown = styled.li<DropDownType>`
  width: 100%;
  font-weight: 300;
  position: relative;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;

  svg {
    position: absolute;
    right: 16px;
    transition: all ease 0.2s;
    transform: ${(props) =>
      props.ativo ? 'rotate(0.5turn)' : 'rotate(0turn)'};
  }
`

export const DropdownList = styled.ul<DropDownType>`
  transition: all ease-in-out 0.3s;
  width: 100%;
  overflow-y: hidden;
  height: ${(props) => (props.ativo ? '280px' : '0px')};

  li {
    padding: 16px 44px;
    background-color: #ecedf2;

    a {
      text-decoration: none;
      cursor: pointer;
      color: inherit;
    }
  }
`
