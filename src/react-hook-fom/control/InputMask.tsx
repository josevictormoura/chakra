import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

export default function ExemploInputMask() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data) // ex: { telefone: '(11) 91234-5678' }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="telefone"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputMask
            mask="(99) 99999-9999"
            value={field.value}
            onChange={field.onChange}
          >
            {(inputProps) => <input {...inputProps} />}
          </InputMask>
        )}
      />

      <button type="submit">Enviar</button>
    </form>
  )
}
