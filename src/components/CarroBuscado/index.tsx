import { ContainerCarroBuscado } from './style'

const CarroBuscado = ({
  marca,
  nome,
  img,
  link
}: {
  marca: string
  nome: string
  img: string
  link: string
}) => {
  return (
    <ContainerCarroBuscado>
      <a href={link}>
        <h3>
          {marca} <span>{nome}</span>
        </h3>
        <img src={img} />
      </a>
    </ContainerCarroBuscado>
  )
}

export default CarroBuscado
