import CarroItemRec from '../../components/CarroItemRec'
import CategoriaItem from '../../components/CategoriaItem'
import { Filtro } from './styles'

const Filtros = () => {
  const categoriasCarros = [
    {
      nome: 'Hatches',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/980c1c63-9e76-490e-b460-af82933530ae_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Picapes',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/8ad7e211-dca1-4ca2-8cee-0e19c1992418_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Sedans',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/bc0e183f-bb89-42e7-8663-95b3be51d6d8_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'SUVs',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/e913354e-550e-41db-a790-82895af31a13_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros elétricos',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/1a138102-5b09-40ea-9e96-81f088b795c0_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros econômicos',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/2393ed64-e935-43ec-a4e7-eb688c4760ca_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros de luxo',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/2a646b96-e989-4e26-854d-84f579bdf0f4_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Hatches',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/980c1c63-9e76-490e-b460-af82933530ae_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Picapes',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/8ad7e211-dca1-4ca2-8cee-0e19c1992418_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Sedans',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/bc0e183f-bb89-42e7-8663-95b3be51d6d8_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'SUVs',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/e913354e-550e-41db-a790-82895af31a13_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros elétricos',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/1a138102-5b09-40ea-9e96-81f088b795c0_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros econômicos',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/2393ed64-e935-43ec-a4e7-eb688c4760ca_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    },
    {
      nome: 'Carros de luxo',
      link: '#',
      img: 'https://catalogo.webmotors.com.br/imagens/prod/fotos-temas/CardDesktop/2a646b96-e989-4e26-854d-84f579bdf0f4_CardDesktop.jpg?s=fill&w=274&h=216&q=70'
    }
  ]

  const carrosRecomendados = [
    {
      imgs: [
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-WMIMAGEM21270881766.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-WMIMAGEM23481481698.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-WMIMAGEM21274610916.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-WMIMAGEM21290071231.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-WMIMAGEM23525499247.jpg'
      ],
      nome: 'MITSUBISH LANCER',
      descricao:
        '2.0 EVOLUTION X JOHN EASTON 4X4 16V TURBO INTERCOOLER GASOLINA 4P AUTOMÁTICO',
      valor: 252000,
      anoModelo: '2014/2015',
      kmRodado: 40000,
      localizacao: 'Ribeirao Pires - SP'
    },
    {
      imgs: [
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463090538.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463042239.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463134928.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463176364.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463217219.jpg'
      ],
      nome: 'MITSUBISH LANCER',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 71900,
      anoModelo: '2015/2015',
      kmRodado: 88800,
      localizacao: 'Extrema - MG'
    },
    {
      imgs: [
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231205/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem16472737991.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231205/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem16473224079.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231205/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem16473391361.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463176364.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463217219.jpg'
      ],
      nome: 'MITSUBISH LANCER',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 69990,
      anoModelo: '2017/2018',
      kmRodado: 103000,
      localizacao: 'Sao Paulo - SP'
    },
    {
      imgs: [
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240109/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem19112844850.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240109/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem19112928058.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240109/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem19170947822.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463176364.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463217219.jpg'
      ],
      nome: 'MITSUBISH LANCER',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 61698,
      anoModelo: '2018/2019',
      kmRodado: 69900,
      localizacao: 'Osasco - SP'
    },
    {
      imgs: [
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240112/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem14503791651.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240112/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem14483619521.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240112/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem14503999994.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2024/202401/20240112/mitsubishi-lancer-2.0-hlt-16v-gasolina-4p-automatico-wmimagem14483782478.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463217219.jpg'
      ],
      nome: 'MITSUBISH LANCER',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 69900,
      anoModelo: '2018/2018',
      kmRodado: 62000,
      localizacao: 'Rio de Janeiro - RJ'
    },
    {
      imgs: [
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463090538.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463042239.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463134928.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463176364.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463217219.jpg'
      ],
      nome: 'MITSUBISH LANCER',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 71900,
      anoModelo: '2015/2015',
      kmRodado: 88800,
      localizacao: 'Extrema - MG'
    },
    {
      imgs: [
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463090538.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463042239.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463134928.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463176364.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463217219.jpg'
      ],
      nome: 'MITSUBISH LANCER',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 71900,
      anoModelo: '2015/2015',
      kmRodado: 88800,
      localizacao: 'Extrema - MG'
    },
    {
      imgs: [
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463090538.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463042239.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463134928.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463176364.jpg',
        'https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202312/20231227/MITSUBISHI-LANCER-2.0-GT-16V-GASOLINA-4P-AUTOMATICO-wmimagem10463217219.jpg'
      ],
      nome: 'MITSUBISH LANCER',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 71900,
      anoModelo: '2015/2015',
      kmRodado: 88800,
      localizacao: 'Extrema - MG'
    }
  ]

  return (
    <Filtro>
      <h3 className="titulo-filtro">Lojas Oficiais</h3>
      <div className="lojas">
        <div>
          <a href="https://www.webmotors.com.br/ofertas/feiroes/lojaoficialgwm/carros/estoque/gwm&?lkid=2139&tipoveiculo=carros&marca1=GWM&feirao=Loja%20Oficial%20GWM">
            <img
              src="https://target.webmotors.com.br/PF-vender/Lojas-Oficiais/gwm-lojaoficial.png?s=fill&w=180&h=180&q=70"
              alt="GWM"
            />
          </a>
        </div>
        <div>
          <a href="https://www.webmotors.com.br/ofertas/feiroes/lojaoficialnissan/carros-novos/estoque/nissan&?lkid=2102&tipoveiculo=carros-novos&marca1=NISSAN&feirao=Loja%20Oficial%20Nissan">
            <img
              src="https://target.webmotors.com.br/PF-vender/Ads/Nissan.png?s=fill&w=180&h=180&q=70"
              alt="Nissan"
            />
          </a>
        </div>
        <div>
          <a href="https://www.webmotors.com.br/ofertas/feiroes/lojaoficialtoyota/carros-usados/estoque/toyota&?lkid=2103&tipoveiculo=carros-usados&marca1=TOYOTA&feirao=Loja%20Oficial%20Toyota">
            <img
              src="https://target.webmotors.com.br/PF-vender/Lojas-Oficiais/toyota.webp?width=180&height=180?s=fill&w=180&h=180&q=70"
              alt="Toyota"
            />
          </a>
        </div>
        <div>
          <a href="https://www.webmotors.com.br/ofertas/feiroes/lojaoficialhyundai/carros-novos/estoque/hyundai&?lkid=2080&tipoveiculo=carros-novos&marca1=HYUNDAI&feirao=Loja%20Oficial%20Hyundai">
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
          <CategoriaItem
            img={each.img}
            link={each.link}
            nome={each.nome}
            key={each.nome}
          />
        ))}
      </div>
      <h3 className="titulo-filtro">Recomendados para você</h3>
      <div className="carros-recomendados">
        {carrosRecomendados.map((each) => (
          <CarroItemRec
            img={each.imgs}
            anoModelo={each.anoModelo}
            descricao={each.descricao}
            kmRodado={each.kmRodado}
            nome={each.nome}
            valor={each.valor}
            localizacao={each.localizacao}
            key={each.nome}
          />
        ))}
      </div>
      <h3 className="titulo-filtro">Notícias</h3>
      <div></div>
    </Filtro>
  )
}

export default Filtros
