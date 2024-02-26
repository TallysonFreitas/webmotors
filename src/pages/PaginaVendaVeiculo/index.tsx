import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import { EstiloGlobal } from '../../style'
import CarrosselVenda from '../../containers/Carrossel-venda'
import InfoCarro from '../../containers/InfoCarro'
import { useEffect, useState } from 'react'
import Loading from '../../containers/Loading'

export type CarroType = {
  id: number
  modelo: string
  marca: string
  valorAnuncio: number
  informacoes: {
    cidadeCapital: string
    ano: string
    KM: string
    cambio: string
    carroceria: string
    combustível: string
    finalDePlaca: number
    cor: string
    aceitaTroca: string
  }
  imgs: string[]
  sobreVeiculo: string
  PromoCondicoes: {
    carDelivery: boolean
    troco: boolean
    superPreco: boolean
  }
  itensVeiculo: string[]
  loja: { nome: string; localizacao: string }
  comparaPrecos: { mediaWebMotors: number; fipe: number }
}

const PaginaVendaVeiculo = () => {
  // Salva item carro
  const [carro, setCarro] = useState({
    id: 0,
    modelo: '',
    marca: '',
    valorAnuncio: 0,
    informacoes: {
      cidadeCapital: '',
      ano: '',
      KM: '',
      cambio: '',
      carroceria: '',
      combustível: '',
      finalDePlaca: 0,
      cor: '',
      aceitaTroca: ''
    },
    sobreVeiculo: '',
    imgs: [],
    PromoCondicoes: { carDelivery: false, troco: false, superPreco: false },
    itensVeiculo: [],
    loja: { nome: '', localizacao: '' },
    comparaPrecos: { mediaWebMotors: 0, fipe: 0 }
  })
  const [loading, setLoading] = useState(true)

  // Busca id no URL
  const urlSearchParams = new URLSearchParams(window.location.search)
  const PostId = urlSearchParams.get('id')

  // Usa fetch para buscar obj carro
  async function requisicaoJson() {
    await fetch('./cars.json').then(function (response) {
      if (response.ok) {
        if (PostId !== null) {
          response.json().then((data) => setCarro(data[PostId])),
            setLoading(false)
        } else {
          response.json().then((data) => setCarro(data[0]))
        }
      }
    })
  }

  // Inicia a funcao de busca do obj
  useEffect(() => {
    scroll(0, 0), setInterval(requisicaoJson, 1000)
  }, [])

  return (
    <>
      <EstiloGlobal />
      <Header />

      {loading === true ? (
        <Loading />
      ) : (
        <>
          <CarrosselVenda imgs={carro.imgs} />
          <InfoCarro carro={carro} />
          <Footer />
        </>
      )}
    </>
  )
}

export default PaginaVendaVeiculo
