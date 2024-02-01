import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import { EstiloGlobal } from '../../style'
import CarrosselVenda from '../../containers/Carrossel-venda'
import InfoCarro from '../../containers/InfoCarro'
import { useEffect, useState } from 'react'

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
  comparaPrecos: { mediaWebMotors: string; fipe: string }
}

const PaginaVendaVeiculo = () => {
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
    comparaPrecos: { mediaWebMotors: '', fipe: '' }
  })

  console.log(typeof carro)

  useEffect(() => {
    fetch('./cars.json')
      .then((response) => response.json())
      .then((data) => setCarro(data[0]))
  }, [])

  return (
    <>
      <EstiloGlobal />
      <Header />
      <CarrosselVenda imgs={carro.imgs} />
      <InfoCarro carro={carro} />
      <Footer />
    </>
  )
}

export default PaginaVendaVeiculo
