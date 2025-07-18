// import * as yup from 'yup';

// export const schema = yup.object({
//   giftListType: yup.number(),
//   contactid: yup.string(),
//   eventHost: yup
//     .string()
//     .required('O nome do anfitrião obrigatório')
//     .max(40, 'O nome do anfitrião deve ter no máximo 40 caracteres.'),
//   eventCoHost: yup
//     .string()
//     .max(40, 'O nome do co-anfitrião deve ter no máximo 40 caracteres.'),
//   eventHostEmail: yup
//     .string()
//     .email('E-mail inválido')
//     .max(100, 'O email do anfitrião deve ter no máximo 100 caracteres')
//     .required('E-mail é obrigatório'),
//   eventCoHostEmail: yup
//     .string()
//     .email('E-mail inválido')
//     .max(100, 'O email do co-anfitrião deve ter no máximo 100 caracteres'),
//   eventHostDocument: yup
//     .string()
//     // .required('CPF é obrigatório')
//     // O transform remove a máscara ANTES da validação.
//     .transform((value) => value.replace(/[^\d]/g, ''))
//     .test('cpf', 'CPF inválido', (value) => cpf.isValid(value || '')),
//   eventCoHostDocument: yup
//     .string()
//     .transform((value) => (value ? value.replace(/[^\d]/g, '') : ''))
//     .test('cpf', 'CPF inválido', (value) => !value || cpf.isValid(value)),
// });
// // .required();
