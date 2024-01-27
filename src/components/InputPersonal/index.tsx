import { ContainerInput } from './styles'

const InputPersonal = ({
  type,
  placeholder,
  valor,
  muda
}: {
  type: string
  placeholder: string
  valor?: string | number
  muda: any
}) => {
  return (
    <ContainerInput>
      <input
        type={type}
        value={valor}
        className="class-input"
        minLength={3}
        required={true}
        onChange={(e) => {
          muda(e.target.value)
        }}
      ></input>
      <label className="class-label">
        {placeholder}
        <span className="valid-icon"></span>
      </label>
    </ContainerInput>
  )
}

export default InputPersonal
