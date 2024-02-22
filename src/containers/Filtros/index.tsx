import CarroBuscado from '../../components/CarroBuscado'
import CarroItemRec from '../../components/CarroItemRec'
import CategoriaItem from '../../components/CategoriaItem'
import NoticiaItem from '../../components/NoticiaItem'
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
    }
  ]

  const carrosRecomendados = [
    {
      link: 'comprar-veiculo?id=0',
      imgs: [
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-wmimagem21270881766.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-wmimagem23481481698.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-wmimagem21274610916.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240103/mitsubishi-lancer-2.0-evolution-x-john-easton-4x4-16v-turbo-intercooler-gasolina-4p-automatico-wmimagem2147335673.jpg?s=fill&w=552&h=414&q=60'
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
      link: 'comprar-veiculo?id=2',
      imgs: [
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240201/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem17294073680.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240201/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem17255780083.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240201/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem17294484296.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240201/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem17260200716.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240201/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem17260462212.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240201/honda-civic-2.0-16v-flexone-ex-4p-cvt-wmimagem17295128018.jpg?s=fill&w=552&h=414&q=60'
      ],
      nome: 'HONDA CIVIC',
      descricao: '2.0 LXR 16V FLEX 4P AUTOMÁTICO',
      valor: 138990,
      anoModelo: '2021/2021',
      kmRodado: 12000,
      localizacao: 'Imperatriz - MA'
    },
    {
      link: '/comprar-veiculo?id=7',
      imgs: [
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240126/volkswagen-golf-2.0-350-tsi-gasolina-gti-dsg-wmimagem09125769698.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240126/volkswagen-golf-2.0-350-tsi-gasolina-gti-dsg-wmimagem09125839615.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240126/volkswagen-golf-2.0-350-tsi-gasolina-gti-dsg-wmimagem09125886830.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240126/volkswagen-golf-2.0-350-tsi-gasolina-gti-dsg-wmimagem09125969540.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240126/volkswagen-golf-2.0-350-tsi-gasolina-gti-dsg-wmimagem09130028291.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240126/volkswagen-golf-2.0-350-tsi-gasolina-gti-dsg-wmimagem09130093338.jpg?s=fill&w=552&h=414&q=60'
      ],
      nome: 'Volkswagen GOLF',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 210990,
      anoModelo: '2018/2019',
      kmRodado: 43779,
      localizacao: 'Piracicaba - SP'
    },
    {
      link: '/comprar-veiculo?id=1',
      imgs: [
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240206/toyota-corolla-1.8-vvti-hybrid-flex-altis-premium-cvt-wmimagem10185520548.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240206/toyota-corolla-1.8-vvti-hybrid-flex-altis-premium-cvt-wmimagem10185686546.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240206/toyota-corolla-1.8-vvti-hybrid-flex-altis-premium-cvt-wmimagem10115699673.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240206/toyota-corolla-1.8-vvti-hybrid-flex-altis-premium-cvt-wmimagem10185966734.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240206/toyota-corolla-1.8-vvti-hybrid-flex-altis-premium-cvt-wmimagem10190116882.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202402/20240206/toyota-corolla-1.8-vvti-hybrid-flex-altis-premium-cvt-wmimagem10190283356.jpg?s=fill&w=552&h=414&q=60'
      ],
      nome: 'Toyota Corolla',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 189900,
      anoModelo: '2020/2021',
      kmRodado: 26042,
      localizacao: 'Sao Paulo - SP'
    },
    {
      link: 'comprar-veiculo?id=3',
      imgs: [
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202311/20231113/volkswagen-jetta-2.0-350-tsi-gasolina-gli-dsg-wmimagem15190517588.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202311/20231113/volkswagen-jetta-2.0-350-tsi-gasolina-gli-dsg-wmimagem15190574731.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202311/20231113/volkswagen-jetta-2.0-350-tsi-gasolina-gli-dsg-wmimagem15190802585.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202311/20231113/volkswagen-jetta-2.0-350-tsi-gasolina-gli-dsg-wmimagem15175629815.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202311/20231113/volkswagen-jetta-2.0-350-tsi-gasolina-gli-dsg-wmimagem15191139028.jpg?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202311/20231113/volkswagen-jetta-2.0-350-tsi-gasolina-gli-dsg-wmimagem15191827559.jpg?s=fill&w=552&h=414&q=60'
      ],
      nome: 'VOLKSWAGEN JETTA',
      descricao: '2.0 350 TSI GASOLINA GLI DSG',
      valor: 172900,
      anoModelo: '2019/2019',
      kmRodado: 30208,
      localizacao: 'Jundiaí - SP'
    },
    {
      link: 'comprar-veiculo?id=6',
      imgs: [
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240111/volkswagen-gol-1-0-12v-mpi-totalflex-last-edition-4p-manual-wmimagem00372668742.webp?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240111/volkswagen-gol-1-0-12v-mpi-totalflex-last-edition-4p-manual-wmimagem00372700410.webp?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240111/volkswagen-gol-1-0-12v-mpi-totalflex-last-edition-4p-manual-wmimagem00372726724.webp?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240111/volkswagen-gol-1-0-12v-mpi-totalflex-last-edition-4p-manual-wmimagem00372770729.webp?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240111/volkswagen-gol-1-0-12v-mpi-totalflex-last-edition-4p-manual-wmimagem00372792736.webp?s=fill&w=552&h=414&q=60',
        'https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202401/20240111/volkswagen-gol-1-0-12v-mpi-totalflex-last-edition-4p-manual-wmimagem00372823429.webp?s=fill&w=552&h=414&q=60'
      ],
      nome: 'Volkswagen Gol',
      descricao: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
      valor: 120900,
      anoModelo: '2022/2022',
      kmRodado: 900,
      localizacao: 'Rio de Janeiro - RJ'
    },
    {
      link: '',
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
    }
  ]

  const CarrosMaisBuscados = [
    {
      nome: 'CIVIC',
      marca: 'HONDA',
      img: 'https://www.webmotors.com.br/novo-portal/static/assets/bestsellers/jpg/honda-civic.jpg',
      id: 2
    },
    {
      nome: 'COROLLA',
      marca: 'TOYOTA',
      img: 'https://www.webmotors.com.br/novo-portal/static/assets/bestsellers/jpg/toyota-corolla.jpg',
      id: 1
    },
    {
      nome: 'FIT',
      marca: 'HONDA',
      img: 'https://www.webmotors.com.br/novo-portal/static/assets/bestsellers/jpg/honda-fit.jpg',
      id: 5
    },
    {
      nome: 'GOL',
      marca: 'VOLKSWAGEN',
      img: 'https://www.webmotors.com.br/novo-portal/static/assets/bestsellers/jpg/volkswagen-gol.jpg',
      id: 6
    },
    {
      nome: 'GOLF',
      marca: 'VOLKSWAGEN',
      img: 'https://www.webmotors.com.br/novo-portal/static/assets/bestsellers/jpg/volkswagen-golf.jpg',
      id: 7
    },
    {
      nome: 'JETTA',
      marca: 'VOLKSWAGEN',
      img: 'https://www.webmotors.com.br/novo-portal/static/assets/bestsellers/jpg/volkswagen-jetta.jpg',
      id: 3
    }
  ]

  const NoticiasDeCarro = [
    {
      autor: 'Marcelo Monegato',
      descricao: 'Civic fecha 2023 com números discretos de vendas',
      img: 'https://www.webmotors.com.br/wp-content/uploads/2023/03/03155912/Honda-Civic-Hybrid-9407-730x545.webp',
      id: 1
    },
    {
      autor: 'Marcelo Monegato',
      descricao: 'BYD entra no top 10 das mais vendidas em dezembro',
      img: 'https://www.webmotors.com.br/wp-content/uploads/2023/10/06182134/BYD-Dolphin-Destaque-3-730x545.webp',
      id: 2
    },
    {
      autor: 'Marcelo Monegato',
      descricao: 'T-Cross e cia: os 20 SUVs mais vendidos em 2023',
      img: 'https://www.webmotors.com.br/wp-content/uploads/2023/09/18151633/Volkswagen-T-Cross-Comfortline-730x545.webp',
      id: 3
    },
    {
      autor: 'Marcelo Monegato',
      descricao: 'Onix é o carro mais vendido do Brasil no varejo',
      img: 'https://www.webmotors.com.br/wp-content/uploads/2023/12/07135753/GM-ONIX-PREMIER-TURBO-1185-730x545.webp',
      id: 4
    },
    {
      autor: 'Marcelo Monegato',
      descricao: 'BYD Seal surpreende nas vendas e atropela figurões',
      img: 'https://www.webmotors.com.br/wp-content/uploads/2023/08/30232032/BYD-Seal-1-730x545.webp',
      id: 5
    },
    {
      autor: 'Marcelo Monegato',
      descricao: 'Toyota prepara frota eletrificada para Paris 2024',
      img: 'https://www.webmotors.com.br/wp-content/uploads/2023/12/11123327/toyota039selectrifiedpassengerfleetforparis2024-730x545.webp',
      id: 6
    }
  ]

  return (
    <Filtro>
      <h3 className="titulo-filtro">Lojas Oficiais</h3>
      <div className="lojas container-scroll">
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
      <div className="container-scroll">
        {categoriasCarros.map((each) => (
          <CategoriaItem
            img={each.img}
            link={each.link}
            nome={each.nome}
            key={each.nome}
          />
        ))}
      </div>
      <h3 className="titulo-filtro">Carros mais buscados</h3>
      <div className="container-scroll">
        {CarrosMaisBuscados.map((each) => (
          <CarroBuscado
            marca={each.marca}
            nome={each.nome}
            img={each.img}
            id={each.id}
            key={each.id}
          />
        ))}
      </div>
      <h3 className="titulo-filtro">Recomendados para você</h3>
      <div className="container-scroll carros-recomendados">
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
            link={each.link}
          />
        ))}
      </div>
      <h3 className="titulo-filtro">Notícias</h3>
      <div className="container-scroll">
        {NoticiasDeCarro.map((each) => (
          <NoticiaItem
            autor={each.autor}
            descricao={each.descricao}
            img={each.img}
            key={each.id}
          />
        ))}
      </div>
    </Filtro>
  )
}

export default Filtros
