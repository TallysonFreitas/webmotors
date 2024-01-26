import { ContainerInput } from './styles'

const InputPersonal = ({
  type,
  placeholder,
  valor
}: {
  type: string
  placeholder: string
  valor?: string
}) => {
  return (
    <ContainerInput>
      <input
        type={type}
        value={valor}
        className="class-input"
        minLength={3}
        required={true}
      ></input>
      <label className="class-label">
        {placeholder}
        <span className="valid-icon"></span>
      </label>
    </ContainerInput>
  )
}

export default InputPersonal
