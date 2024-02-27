import { useEffect, useState } from 'react'
import { BodyDropdown, HeaderDropdown } from './style'

const FooterItem = ({
  titulo,
  children
}: {
  titulo: string
  children: React.ReactNode
}) => {
  const [estaAtivo, setEstaAtivo] = useState(false)
  const tamanhoDaTela = window.screen.width

  useEffect(() => {
    if (tamanhoDaTela > 900) {
      setEstaAtivo(true)
    } else {
      setEstaAtivo(false)
    }
  }, [tamanhoDaTela])

  return (
    <>
      <HeaderDropdown
        ativo={estaAtivo}
        onClick={() => {
          if (tamanhoDaTela < 900) {
            setEstaAtivo(!estaAtivo)
          }
        }}
      >
        <h4>{titulo}</h4>
      </HeaderDropdown>
      <BodyDropdown ativo={estaAtivo}>{children}</BodyDropdown>
    </>
  )
}

export default FooterItem
