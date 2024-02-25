import { useDispatch, useSelector } from 'react-redux'
import CarroItemRec from '../../components/CarroItemRec'
import { ContainerCarrosBuscados, InputBuscar, MenuPesquisa } from './style'
import { RootReducer } from '../../redux'
import { alteraTermo } from '../../redux/reducers/Filtro'
import { useEffect, useState } from 'react'

const CarrosBuscados = () => {
  const { termo } = useSelector((state: RootReducer) => state.buscarFiltro)
  const dispatch = useDispatch()

  const exemploRetorno = {
    id: 100010,
    modelo: 'Model S',
    marca: 'Tesla',
    valorAnuncio: 949990,
    informacoes: {
      cidadeCapital: 'Piracicaba - SP',
      ano: '2021/2021',
      KM: '1.600',
      cambio: 'Automático',
      carroceria: 'Sedã',
      combustível: 'Gasolina e elétrico',
      finalDePlaca: 0,
      cor: 'Cinza',
      aceitaTroca: 'Sim'
    },
    sobreVeiculo: '',
    imgs: [''],
    PromoCondicoes: { carDelivery: true, troco: true, superPreco: true },
    itensVeiculo: [''],
    loja: {
      nome: 'Boca Mafra Premium',
      localizacao: 'Balneário Camboriú, SC'
    },
    link: '',
    comparaPrecos: { mediaWebMotors: 1016626, fipe: 0 }
  }
  type CarrosFiltradosType = typeof exemploRetorno

  const [carrosCarregados, setCarrosCarregados] = useState<
    CarrosFiltradosType[]
  >([])

  async function carregaVeiculos() {
    await fetch('./cars.json')
      .then((data) => data.json())
      .then((response) => {
        setCarrosCarregados(response), setCarrosFiltrados(response)
      })
  }

  const [carrosFiltrados, setCarrosFiltrados] = useState<CarrosFiltradosType[]>(
    []
  )

  // atualiza busca de carros
  useEffect(() => {
    if (termo == '') {
      setCarrosFiltrados(carrosCarregados)
    } else {
      setCarrosFiltrados(
        carrosCarregados.filter(
          (each) =>
            `${each.marca} ${each.modelo}`
              .toLowerCase()
              .includes(termo.toLowerCase()) == true
        )
      )
    }
  }, [termo])

  // ao carregar a pagina executa Promisse para carregar veiculo
  useEffect(() => {
    carregaVeiculos()
  }, [])

  return (
    <ContainerCarrosBuscados>
      <MenuPesquisa>
        <div>
          <InputBuscar
            spellCheck={false}
            placeholder="Procure seu carro aqui"
            value={termo}
            onChange={(e) => {
              dispatch(alteraTermo(e.target.value))
            }}
          />
          <div></div>
        </div>
      </MenuPesquisa>
      {carrosFiltrados.map((each) => (
        <CarroItemRec
          img={each.imgs}
          anoModelo={`${each.informacoes.ano}`}
          descricao={`${each.sobreVeiculo.slice(0, 80)}...`}
          kmRodado={0}
          nome={`${each.marca} ${each.modelo}`}
          valor={each.valorAnuncio}
          localizacao={each.informacoes.cidadeCapital}
          key={each.id}
          link={`${each.link}${each.id}`}
        />
      ))}
    </ContainerCarrosBuscados>
  )
}

export default CarrosBuscados
