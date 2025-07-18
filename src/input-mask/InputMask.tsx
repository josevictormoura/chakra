import { useForm, Controller } from 'react-hook-form';
import {Input, Button, Field } from '@chakra-ui/react';
import InputMask from 'react-input-mask';

export default function PhoneForm() {
  // const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log('Dados do formulário:', data);
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <Field.Root>
    //     <Field.Label>Telefone</Field.Label>
    //     <Controller
    //       name="phone"
    //       control={control}
    //       defaultValue=""
    //       render={({ field }) => (
    //         <InputMask
    //           mask="(99) 99999-9999"
    //           {...field}
    //         >
    //           {(inputProps: any) => <Input {...inputProps} />}
    //         </InputMask>
    //       )}
    //     />
    //   </Field.Root>

    //   <Button mt={4} type="submit" colorScheme="blue">
    //     Enviar
    //   </Button>
    // </form>
    <div>
      <label>Telefone:</label>
      <InputMask 
        mask="(99) 99999-9999" 
        placeholder="(00) 00000-0000"
      />
    </div>
  );
}
