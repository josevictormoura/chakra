import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'

const opcoes = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
]

export default function SelectComponente() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data) // ex: { framework: { label: 'React', value: 'react' } }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="framework"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <Select
            options={opcoes}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <button type="submit">Enviar</button>
    </form>
  )
}

