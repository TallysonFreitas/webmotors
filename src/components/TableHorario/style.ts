import styled from 'styled-components'

export type TableAtiveType = {
  ativo: boolean
}

export const HeaderTable = styled.p<TableAtiveType>`
  p {
    font-size: 12px;
    font-weight: 700;
    color: rgb(105, 105, 119);
    padding: 0px 12px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 8px;
    position: relative;
    cursor: pointer;
  }

  table {
    display: ${(props) => (props.ativo ? 'block' : 'none')};
    border: 1px solid;

    tbody {
      tr {
        border: 1px solid #000;
      }
    }
  }
`
