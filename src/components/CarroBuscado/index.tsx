import { Link } from 'react-router-dom'
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
      <Link className="link" to={`${link}?id=${id}`}>
        <h3>
          {marca} <span>{nome}</span>
        </h3>
        <img src={img} />
      </Link>
    </ContainerCarroBuscado>
  )
}

export default CarroBuscado
