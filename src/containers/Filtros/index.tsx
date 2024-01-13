import { ContainerPadrao } from '../../style'
import { Filtro } from './styles'

const Filtros = () => {
  return (
    <Filtro>
      <h3>Lojas Oficiais</h3>
      <div className="lojas">
        <div>
          <a href="#">
            <img
              src="https://target.webmotors.com.br/PF-vender/Lojas-Oficiais/gwm-lojaoficial.png?s=fill&w=180&h=180&q=70"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="https://target.webmotors.com.br/PF-vender/Ads/Nissan.png?s=fill&w=180&h=180&q=70"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="https://target.webmotors.com.br/PF-vender/Lojas-Oficiais/toyota.webp?width=180&height=180?s=fill&w=180&h=180&q=70"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="https://target.webmotors.com.br/PF-vender/Lojas-Oficiais/hyundai.webp?width=180&height=180?s=fill&w=180&h=180&q=70"
              alt=""
            />
          </a>
        </div>
      </div>
      <h3>Categorias</h3>
      <div></div>
      <h3>Recomendados para você</h3>
      <div></div>
      <h3>Notícias</h3>
      <div></div>
    </Filtro>
  )
}

export default Filtros
