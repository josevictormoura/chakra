import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import './yup.css';
import * as yup from 'yup';
import { useHookFormMask } from 'use-mask-input';
import { cpf } from 'cpf-cnpj-validator';
import { TextInput } from '../input/Input';
import React from 'react'
import ImageUploader from '../../img-uploader/ImageUploader';

const schema = yup.object({
  //cmpos obrigatorios
  giftListType: yup.number().required(),
  contactid: yup.string().required(),
  eventHost: yup
    .string()
    .required('O nome do anfitrião obrigatório')
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
  eventCoHost: yup
    .string()
    .max(40, 'O nome do co-anfitrião deve ter no máximo 40 caracteres.')
    .defined(),
  eventCoHostEmail: yup
    .string()
    .email('E-mail inválido')
    .max(100, 'O email do co-anfitrião deve ter no máximo 100 caracteres')
    .defined(),
  eventCoHostDocument: yup
    .string()
    .transform((value) => (value ? value.replace(/[^\d]/g, '') : ''))
    .test('cpf', 'CPF inválido', (value) => !value || cpf.isValid(value))
    .defined(),
  giftListCoverPhoto: yup
    .string()
    .defined(),
});

type FormData = yup.InferType<typeof schema>;

export function SimpleForm() {
  // const [dataApi, setDataApi] = React.useState({
  //   giftListType: 1, // Valor padrão adicionado
  //   contactid: 'default-contact-id', // Valor padrão adicionado
  //   eventHost: 'pedro',
  //   eventHostEmail: 'pedro@gmail.com',
  //   eventHostDocument: '958.707.530-74',
  //   eventCoHost: 'joao',
  //   eventCoHostEmail: 'joao@gmail.com',
  //   eventCoHostDocument: '958.707.530-74',
  // });

  // console.log(setDataApi);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      giftListType: 1, // Valor padrão adicionado
      contactid: 'default-contact-id', // Valor padrão adicionado
    }, //mode: 'onBlur', // Valida quando o campo perde o foco
  });

  const registerWithMask = useHookFormMask(register);
  const [coverPhoto, setCoverPhoto] = React.useState('');
  const [coverPhotoThumbnail, setCoverPhotoThumbnail] = React.useState('');


  const onSubmit = (data: FormData) => {
    // Os dados já chegam sem a máscara por causa do `transform` do Yup.
    console.log(data);
    alert('Formulário enviado com sucesso!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Cadastro Simples</h2>

      <div className="form-group">
        <TextInput type="hidden" {...register('giftListType')} />
        {errors.giftListType && (
          <span className="error">{errors.giftListType.message}</span>
        )}
      </div>
      <div className="form-group">
        <TextInput type="hidden" {...register('contactid')} />
        {errors.contactid && (
          <span className="error">{errors.contactid.message}</span>
        )}
      </div>

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
        <label>Co-Anfitrião</label>
        <TextInput {...register('eventCoHost')} />
        {errors.eventCoHost && (
          <span className="error">{errors.eventCoHost.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>Email do Co-Anfitrião</label>
        <TextInput {...register('eventCoHostEmail')} />
        {errors.eventCoHostEmail && (
          <span className="error">{errors.eventCoHostEmail.message}</span>
        )}
      </div>

      <div className="form-group">
        <label>CPF do Co-Anfitrião</label>
        <TextInput
          {...registerWithMask('eventCoHostDocument', '(99) 99999-9999')}
          placeholder="000.000.000-00"
        />
        {errors.eventCoHostDocument && (
          <span className="error">{errors.eventCoHostDocument.message}</span>
        )}
      </div>

      <ImageUploader
        // theme="dark"
        onImageUpload={(file) => {
          setCoverPhotoThumbnail(URL.createObjectURL(file));
          const coverPhotoReader = new FileReader();
          coverPhotoReader.readAsDataURL(file);
          coverPhotoReader.onloadend = () => {
            setCoverPhoto(String(coverPhotoReader.result));
          };
        }}
        // uploadedImage={coverPhotoThumbnail}
        label="Foto de Capa"
        legend="Caso você não tenha uma foto de capa no momento não se preocupe, você poderá adicioná-la depois"
        isErrored={!!errors.giftListCoverPhoto?.message}
        errorMessage={errors.giftListCoverPhoto?.message}
        {...register('giftListCoverPhoto')}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
