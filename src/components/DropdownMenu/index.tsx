import React, { useState } from 'react'
import { DropdownList, ItemDropdown } from './style'

const DropDownMenuItem = ({
  titulo,
  children
}: {
  titulo: string
  children: React.ReactNode
}) => {
  const [estaAtivo, setEstaAtivo] = useState(false)
  return (
    <>
      <ItemDropdown
        ativo={estaAtivo}
        onClick={() => {
          setEstaAtivo(!estaAtivo)
        }}
      >
        {titulo}
        <svg className="_fzBJV" height="24" width="24">
          <path
            className="_qNJk-"
            d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
          ></path>
        </svg>
      </ItemDropdown>
      <DropdownList ativo={estaAtivo}>{children}</DropdownList>
    </>
  )
}

export default DropDownMenuItem
