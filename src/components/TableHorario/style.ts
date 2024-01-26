import styled from 'styled-components'

export type TableAtiveType = {
  ativo: boolean
}

export const HeaderTable = styled.div<TableAtiveType>`
  border: 1px solid #696977;
  max-width: 280px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: 700;
    color: rgb(105, 105, 119);
    padding: 12px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 16px;

    .arrow-up {
      border-style: solid;
      border-color: rgb(105, 105, 119);
      border-image: initial;
      border-width: 0px 2px 2px 0px;
      display: inline-block;
      padding: 4px;
      transform: rotate(-135deg);
      margin-top: 8px;
    }

    .arrow-down {
      transform: rotate(-315deg);
      margin-top: -8px;
    }
  }

  table {
    display: ${(props) => (props.ativo ? '' : 'none')};
    width: 100%;
    border-spacing: 0px;

    tbody {
      tr {
        .td-esquerda {
          padding-left: 12px;
          text-align: left;
        }

        .td-direita {
          padding-right: 12px;
          text-align: right;
        }

        td {
          padding: 12px 0;
          border-top: 1px solid #696977;
          font-size: 12px;
          color: #2e2d37;
          font-weight: 400;
          width: 60%;
        }
      }
    }
  }
`
