import { useSelector } from 'react-redux'
import CarrosBuscados from '../../containers/CarrosBuscados'
import Header from '../../containers/Header'
import { EstiloGlobal } from '../../style'
import { useEffect, useState } from 'react'
import { RootReducer } from '../../redux'
import Loading from '../../containers/Loading'

const exemploRetorno = {
  id: 100010,
  modelo: 'Model S',
  marca: 'Tesla',
  valorAnuncio: 949990,
  informacoes: {
    cidadeCapital: 'Piracicaba - SP',
    ano: '2021/2021',
    KM: 1600,
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

const PesquisarVeiculo = () => {
  const { termo } = useSelector((state: RootReducer) => state.buscarFiltro)

  const [carregando, setCarregando] = useState(true)

  const [carrosCarregados, setCarrosCarregados] = useState<
    CarrosFiltradosType[]
  >([])

  async function carregaVeiculos() {
    try {
      await fetch('./cars.json')
        .then((data) => data.json())
        .then((response) => {
          setCarrosCarregados(response),
            setCarrosFiltrados(response),
            setTimeout(() => {
              setCarregando(false)
            }, 1000)
        })
    } catch (e) {
      console.error(`ocorreu um erro: ${e}`)
    }
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
    <>
      <EstiloGlobal />
      <Header />
      {carregando === true ? (
        <Loading />
      ) : (
        <CarrosBuscados array={carrosFiltrados} />
      )}
    </>
  )
}

export default PesquisarVeiculo
