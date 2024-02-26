import { useDispatch, useSelector } from 'react-redux'
import CarroItemRec from '../../components/CarroItemRec'
import { ContainerCarrosBuscados, InputBuscar, MenuPesquisa } from './style'
import { RootReducer } from '../../redux'
import { alteraTermo } from '../../redux/reducers/Filtro'

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
  link: ''
}
type CarrosFiltradosType = typeof exemploRetorno

const CarrosBuscados = ({ array }: { array: CarrosFiltradosType[] }) => {
  const { termo } = useSelector((state: RootReducer) => state.buscarFiltro)
  const dispatch = useDispatch()
  console.log(array)

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
      {array.map((each) => (
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
