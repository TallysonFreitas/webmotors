import { ContainerItemCategoria, TituloItemCategoria } from './styles'

const CategoriaItem = ({
  nome,
  img,
  link
}: {
  nome: string
  img: string
  link: string
}) => {
  return (
    <ContainerItemCategoria>
      <img src={img} alt={nome} />
      <a href={link} title={nome}></a>
      <TituloItemCategoria>{nome}</TituloItemCategoria>
    </ContainerItemCategoria>
  )
}

export default CategoriaItem
