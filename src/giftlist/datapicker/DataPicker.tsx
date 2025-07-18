import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import type { DatePickerProps } from 'react-datepicker';
import { ptBR } from 'date-fns/locale';
import * as C from './styles';

import 'react-datepicker/dist/react-datepicker.css';
import { Box } from '@chakra-ui/react';
import { border } from '@chakra-ui/system';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

registerLocale('pt-BR', ptBR);

const DataPicker = () => {
  const [startDate, setStartDate] = useState();

  console.log('startDate', startDate);

  return (
    <C.DataPickerStyle>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        locale={'pt-BR'}
        showTimeSelect
        dateFormat="dd/MM/yyyy 'às' HH:mm"
        timeCaption="Hora"
        className="data-picker"
        required
      />
      <button type="submit">Enviar</button>
    </C.DataPickerStyle>
  );
};

export default DataPicker;
