import { ContainerNoticiaItem, ImagemContainer } from './styles'

const NoticiaItem = ({
  img,
  descricao,
  autor
}: {
  img: string
  descricao: string
  autor: string
}) => {
  return (
    <ContainerNoticiaItem>
      <ImagemContainer img={img}></ImagemContainer>
      <div className="infos">
        <h5>
          <span>/</span>Últimas notícias
        </h5>
        <p>{descricao}</p>
        <div className="autor">
          <img
            src="https://www.webmotors.com.br/wm1/assets/508d6137c5695b5ed13ab89101f9d24d.png"
            alt=""
          />
          <p>por {autor}</p>
        </div>
      </div>
    </ContainerNoticiaItem>
  )
}

export default NoticiaItem
