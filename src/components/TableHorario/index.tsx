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
        {tabelaEstaAtiva ? (
          <i className="arrow-up"></i>
        ) : (
          <i className="arrow-up arrow-down"></i>
        )}
      </p>
      <table>
        <tbody>
          <tr>
            <td className="td-esquerda">Segunda:</td>
            <td className="td-direita">08:30 - 18:30</td>
          </tr>
          <tr>
            <td className="td-esquerda">Terça:</td>
            <td className="td-direita">08:30 - 18:30</td>
          </tr>
          <tr>
            <td className="td-esquerda">Quarta:</td>
            <td className="td-direita">08:30 - 18:30</td>
          </tr>
          <tr>
            <td className="td-esquerda">Quinta:</td>
            <td className="td-direita">08:30 - 18:30</td>
          </tr>
          <tr>
            <td className="td-esquerda">Sexta:</td>
            <td className="td-direita">08:30 - 18:30</td>
          </tr>
          <tr>
            <td className="td-esquerda">Sábado:</td>
            <td className="td-direita">09:00 - 13:00</td>
          </tr>
        </tbody>
      </table>
    </HeaderTable>
  )
}

export default TableHorario
