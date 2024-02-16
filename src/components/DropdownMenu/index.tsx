import React, { useState } from 'react'
import { DropdownList, ItemDropdown } from './style'

const DropDownMenuItem = ({ children }: { children: React.ReactNode }) => {
  const [estaAtivo, setEstaAtivo] = useState(false)
  return (
    <>
      <ItemDropdown
        ativo={estaAtivo}
        onClick={() => {
          setEstaAtivo(!estaAtivo)
        }}
      >
        {children}
      </ItemDropdown>
      <DropdownList ativo={estaAtivo}>
        <li>
          <a href="#">Carros usados</a>
        </li>
        <li>
          <a href="#">Carros novos</a>
        </li>
        <li>
          <a href="#">Motos usadas</a>
        </li>
        <li>
          <a href="#">Motos novas</a>
        </li>
        <li>
          <a href="#">Vistoriado</a>
        </li>
      </DropdownList>
    </>
  )
}

export default DropDownMenuItem
