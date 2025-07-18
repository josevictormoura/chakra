'use client';

import { Input } from '@chakra-ui/react';
import { withMask } from 'use-mask-input';

export const InputMask = () => {
  return <Input ref={withMask('999.999.999-99')} />;
};
