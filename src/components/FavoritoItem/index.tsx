import { useNavigate } from 'react-router-dom'
import { BackgroundImage, ContainerFavoritoItem } from './style'

const FavoritoItem = ({
  img,
  nome,
  descricao,
  valor,
  anoModelo,
  kmRodado,
  localizacao,
  link,
  id
}: {
  img: string[]
  nome: string
  descricao: string
  valor: number
  anoModelo: string
  kmRodado: number
  localizacao: string
  link: string
  id: number
}) => {
  const navigate = useNavigate()

  return (
    <ContainerFavoritoItem
      onClick={() => {
        navigate(`${link}${id}`)
      }}
    >
      <BackgroundImage image={img[0]} />
      <div className="card-bottom">
        <h6>{nome}</h6>
        <p>
          {valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 0,
            style: 'currency',
            currency: 'BRL'
          })}
        </p>
        <div className="infos">
          <span>
            {kmRodado.toLocaleString('pt-BR', {
              minimumFractionDigits: 0,

              currency: 'BRL'
            })}
            Km
          </span>
          <span> {localizacao}</span>
          <span> {anoModelo}</span>
        </div>
        <p>{descricao}...</p>
      </div>
    </ContainerFavoritoItem>
  )
}

export default FavoritoItem
