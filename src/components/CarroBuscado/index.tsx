import { ContainerCarroBuscado } from './style'

const CarroBuscado = ({
  marca,
  nome,
  img
}: {
  marca: string
  nome: string
  img: string
}) => {
  return (
    <ContainerCarroBuscado>
      <h3>
        {marca} <span>{nome}</span>
      </h3>
      <img src={img} />
    </ContainerCarroBuscado>
  )
}

export default CarroBuscado
