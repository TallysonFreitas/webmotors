import { ContainerLoading, Loader } from './style'

const Loading = () => {
  return (
    <ContainerLoading>
      <Loader>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__ball"></div>
      </Loader>
    </ContainerLoading>
  )
}

export default Loading
