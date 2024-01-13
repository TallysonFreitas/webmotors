import { ContainerItemCategoria, TituloItemCategoria } from './styles'

const CategoriaItem = ({ nome, img }: { nome: string; img: string }) => {
  return (
    <ContainerItemCategoria>
      <img src={img} alt={nome} />
      <TituloItemCategoria>{nome}</TituloItemCategoria>
    </ContainerItemCategoria>
  )
}

export default CategoriaItem
