import { useDispatch, useSelector } from 'react-redux'
import CarroItemRec from '../../components/CarroItemRec'
import { ContainerCarrosBuscados, InputBuscar, MenuPesquisa } from './style'
import { RootReducer } from '../../redux'
import { alteraTermo } from '../../redux/reducers/Filtro'
import { useEffect, useMemo, useState } from 'react'

const CarrosBuscados = () => {
  const { termo } = useSelector((state: RootReducer) => state.buscarFiltro)
  const dispatch = useDispatch()

  const carros = [
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
    }
  ]

  const [carrosFiltrados, setCarrosFiltrados] = useState([carros[0]])

  useEffect(() => {
    if (termo == '') {
      setCarrosFiltrados(carros)
    } else {
      setCarrosFiltrados(
        carros.filter(
          (each) =>
            each.nome.toLowerCase().includes(termo.toLowerCase()) == true
        )
      )
    }
    console.log(carrosFiltrados)
  }, [termo])

  return (
    <ContainerCarrosBuscados>
      <MenuPesquisa>
        <InputBuscar
          spellCheck={false}
          placeholder="Procure seu carro aqui"
          value={termo}
          onChange={(e) => {
            dispatch(alteraTermo(e.target.value))
          }}
        />
      </MenuPesquisa>
      {carrosFiltrados.map((each) => (
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
    </ContainerCarrosBuscados>
  )
}

export default CarrosBuscados
