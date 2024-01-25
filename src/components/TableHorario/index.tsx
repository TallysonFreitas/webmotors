import { useState } from 'react'
import { HeaderTable } from './style'

const TableHorario = () => {
  const [tabelaEstaAtiva, setTabelaEstaAtiva] = useState(false)
  return (
    <HeaderTable ativo={tabelaEstaAtiva}>
      <p
        onClick={() => {
          setTabelaEstaAtiva(!tabelaEstaAtiva)
        }}
      >
        Loja aberta agora - Fecha às 18h30
      </p>
      <table>
        <tbody>
          <tr>
            <td>Segunda:</td>
            <td>08:30 - 18:30</td>
          </tr>
          <tr>
            <td>Terça:</td>
            <td>08:30 - 18:30</td>
          </tr>
          <tr>
            <td>Quarta:</td>
            <td>08:30 - 18:30</td>
          </tr>
          <tr>
            <td>Quinta:</td>
            <td>08:30 - 18:30</td>
          </tr>
          <tr>
            <td>Sexta:</td>
            <td>08:30 - 18:30</td>
          </tr>
          <tr>
            <td>Sábado:</td>
            <td>09:00 - 13:00</td>
          </tr>
        </tbody>
      </table>
    </HeaderTable>
  )
}

export default TableHorario
