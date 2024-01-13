import CategoriaItem from '../../components/CategoriaItem'
import { Filtro } from './styles'

const Filtros = () => {
  const categoriasCarros = [
    {
      nome: 'Hatches',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/980c1c63-9e76-490e-b460-af82933530ae_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Picapes',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/8ad7e211-dca1-4ca2-8cee-0e19c1992418_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Sedans',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/bc0e183f-bb89-42e7-8663-95b3be51d6d8_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'SUVs',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/e913354e-550e-41db-a790-82895af31a13_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros elétricos',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/1a138102-5b09-40ea-9e96-81f088b795c0_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros econômicos',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/2393ed64-e935-43ec-a4e7-eb688c4760ca_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros de luxo',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/2a646b96-e989-4e26-854d-84f579bdf0f4_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Hatches',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/980c1c63-9e76-490e-b460-af82933530ae_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Picapes',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/8ad7e211-dca1-4ca2-8cee-0e19c1992418_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Sedans',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/bc0e183f-bb89-42e7-8663-95b3be51d6d8_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'SUVs',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/e913354e-550e-41db-a790-82895af31a13_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros elétricos',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/1a138102-5b09-40ea-9e96-81f088b795c0_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros econômicos',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/2393ed64-e935-43ec-a4e7-eb688c4760ca_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros de luxo',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/2a646b96-e989-4e26-854d-84f579bdf0f4_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    }
  ]

  return (
    <Filtro>
      <h3 className="titulo-filtro">Lojas Oficiais</h3>
      <div className="lojas">
        <div>
          <a href="#">
            <img
              src="https://target.webmotors.com.br/PF-vender/Lojas-Oficiais/gwm-lojaoficial.png?s=fill&w=180&h=180&q=70"
              alt="GWM"
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="https://target.webmotors.com.br/PF-vender/Ads/Nissan.png?s=fill&w=180&h=180&q=70"
              alt="Nissan"
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="https://target.webmotors.com.br/PF-vender/Lojas-Oficiais/toyota.webp?width=180&height=180?s=fill&w=180&h=180&q=70"
              alt="Toyota"
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="https://target.webmotors.com.br/PF-vender/Lojas-Oficiais/hyundai.webp?width=180&height=180?s=fill&w=180&h=180&q=70"
              alt="Hyundai"
            />
          </a>
        </div>
      </div>
      <h3 className="titulo-filtro">Categorias</h3>
      <div className="categorias">
        {categoriasCarros.map((each) => (
          <CategoriaItem img={each.img} nome={each.nome} key={each.nome} />
        ))}
      </div>
      <h3 className="titulo-filtro">Recomendados para você</h3>
      <div></div>
      <h3 className="titulo-filtro">Notícias</h3>
      <div></div>
    </Filtro>
  )
}

export default Filtros
