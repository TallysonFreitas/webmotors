import { ContainerCarroBuscado } from './style'

const CarroBuscado = ({
  marca,
  nome,
  img,
  id
}: {
  marca: string
  nome: string
  img: string
  id: number
}) => {
  const link = '/comprar-veiculo'
  return (
    <ContainerCarroBuscado>
      <a href={`${link}?id=${id}`}>
        <h3>
          {marca} <span>{nome}</span>
        </h3>
        <img src={img} />
      </a>
    </ContainerCarroBuscado>
  )
}

export default CarroBuscado
