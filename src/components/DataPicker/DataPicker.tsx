// import { forwardRef } from 'react';
// import {
//   Input,
// //   InputGroup,
//   InputElement,
//   Icon,
// //   FormControl,
// //   FormLabel,
//   Field,
// } from '@chakra-ui/react';
// import DatePicker from 'react-datepicker';
// import { FiCalendar } from 'react-icons/fi';
// import 'react-datepicker/dist/react-datepicker.css';

// Input personalizado com Chakra UI
// const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
//   <div>
//     <Input
//       ref={ref}
//       onClick={onClick}
//       value={value}
//       w={'100%'}
//       placeholder="Selecione a data e hora"
//       readOnly
//       bg="white"
//       borderColor="gray.300"
//       _hover={{ borderColor: 'gray.400' }}
//       _focus={{ borderColor: 'blue.500' }}
//     />
//     <InputElement pointerEvents="none">
//       <Icon as={FiCalendar} color="gray.500" />
//     </InputElement>
//   </div>
// ));

// export function DateTimePicker({
//   label = 'Data e Hora do evento',
//   selectedDate,
//   onChange,
// }: {
//   label?: string;
//   selectedDate: Date | null;
//   onChange: (date: Date | null) => void;
// }) {
//   return (
//     <Field.Root w={'500px'}>
//       <Field.Label>{label}</Field.Label>
//       <DatePicker
//         selected={selectedDate}
//         onChange={onChange}
//         showTimeSelect
//         timeFormat="HH:mm"
//         timeIntervals={30}
//         dateFormat="dd/MM/yyyy HH:mm"
//         timeCaption="Hora"

//         // customInput={<CustomInput />}
//         locale="pt-BR"
//       />
//     </Field.Root>
//   );
// }

import React, { forwardRef } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import { FiCalendar } from 'react-icons/fi'
import { Box, Input, Icon, Field, Flex } from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'

const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <Box>
    <Icon
      as={FiCalendar}
      color="gray.800"
      position="absolute"
      left="12px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      pointerEvents="none"
    />
    <Input
      width="100%"
      pl="40px"
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      cursor="pointer"
      backgroundColor="white"
      borderColor="black"
      _hover={{ borderColor: 'gray.400' }}
      _focus={{ borderColor: 'gray.500', boxShadow: '0 0 0 1px #4A5568' }}
    />
  </Box>
))
CustomInput.displayName = 'CustomInput'

interface DateTimePickerProps {
  selectedDateTime: Date | null
  setSelectedDateTime: (date: Date | null) => void
}

registerLocale('ptBR', ptBR)
export function DateInput({
  selectedDateTime,
  setSelectedDateTime,
}: DateTimePickerProps) {
  return (
    <Flex direction="column" width="100%">
      <label htmlFor="date-input" >Data e Hora</label>
      <DatePicker
        selected={selectedDateTime}
        onChange={(date: Date | null) => setSelectedDateTime(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="Hora"
        dateFormat="dd/MM/yyyy 'às' HH:mm"
        locale="ptBR"
        customInput={<CustomInput />}
      />
    </Flex>
  )
}