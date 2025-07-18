import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import  './yup.css';
import { useHookFormMask } from 'use-mask-input';
import { cpf } from 'cpf-cnpj-validator';
import { TextInput } from '../input/Input';
import React from 'react';

const schema = yup.object({
  eventHost: yup
    .string()
    .required('O nome do anfitrião é obrigatório')
    .max(40, 'O nome do anfitrião deve ter no máximo 40 caracteres.'),
  eventHostEmail: yup
    .string()
    .email('E-mail inválido')
    .max(100, 'O email do anfitrião deve ter no máximo 100 caracteres')
    .required('E-mail é obrigatório'),
  eventHostDocument: yup
    .string()
    .transform((value) => value.replace(/[^\d]/g, ''))
    .test('cpf', 'CPF inválido', (value) => cpf.isValid(value || ''))
    .required('CPF é obrigatório'),
  eventHostCep: yup
    .string()
    .transform((value) => value.replace(/[^\d]/g, ''))
    .required('CEP é obrigatório'),
});

type FormData = yup.InferType<typeof schema>;

export function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({ resolver: yupResolver(schema), mode: 'onTouched' });

  const registerWithMask = useHookFormMask(register);
  const cepValue = watch('eventHostCep'); // Para acompanhar o valor do CEP
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (cepValue && cepValue.replace(/\D/g, '').length === 8) {
      // Faça sua consulta de CEP aqui
      async function fetchCep() {
        try {
          setIsLoading(true);
          const response = await fetch(
            `https://viacep.com.br/ws/${cepValue}/json/`,
          );
          const data = await response.json();
          setData(data);
        } catch (error: any) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCep();
    } else {
      setData(null);
      setError('');
    }
  }, [cepValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Formulário enviado com sucesso!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Cadastro Simples</h2>

      <div className="form-group">
        <label>Nome do Anfitrião</label>
        <TextInput {...register('eventHost')} required />
        {errors.eventHost && (
          <span className="error">{errors.eventHost.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>Email do Anfitrião</label>
        <TextInput {...register('eventHostEmail')} required />
        {errors.eventHostEmail && (
          <span className="error">{errors.eventHostEmail.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>CPF do Anfitrião</label>
        <TextInput
          {...registerWithMask('eventHostDocument', '999.999.999-99')}
          placeholder="000.000.000-00"
          required
        />
        {errors.eventHostDocument && (
          <span className="error">{errors.eventHostDocument.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>CEP do Anfitrião</label>
        <TextInput
          {...registerWithMask('eventHostCep', '99999-999')}
          placeholder="00000-000"
          required
        />
        {errors.eventHostCep && ( // Corrigido para mostrar erro do CEP
          <span className="error">{errors.eventHostCep.message}</span>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
