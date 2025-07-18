import React from 'react';
// import AppTheme from '@core/AppTheme';
import type { UseFormRegister } from 'react-hook-form';
import {
  Text,
  Icon,
  Input,
  Skeleton,
  Field,
  //   InputProps,
  InputGroup,
  InputElement,
  Box,
} from '@chakra-ui/react';

import type { InputProps } from '@chakra-ui/react';

export interface iFormValues {
  [key: string]: unknown;
}

export interface iTextInputProps extends InputProps {
  // name?: string;
  theme?: 'dark' | 'light';
  label?: string;
  icon?: React.ComponentType;
  isErrored?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
  isRequired?: boolean;
  //   onChange?: any;
  //   value?: string;
  placeholder?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

const TextInput = React.forwardRef<
  HTMLInputElement,
  iTextInputProps & ReturnType<UseFormRegister<iFormValues>>
>(
  (
    {
      name,
      // theme,
      label,
      icon,
      isErrored = false,
      errorMessage,
      isLoading = false,
      isRequired = false,
      ...rest
    },
    ref,
  ) => {
    // const THEME = AppTheme.inputTheme[theme];

    return (
      <Field.Root required={isRequired}>
        {label && (
          <Field.Label>
            <Text>{label}</Text>
            {isRequired && <Field.RequiredIndicator />}
          </Field.Label>
        )}

        {isLoading ? (
          <Skeleton height="40px" />
        ) : (
          <InputGroup>
            <Box w="100%">
              {icon && (
                <InputElement pointerEvents="none">
                  <Icon as={icon} color={'gray'} />
                </InputElement>
              )}
              <Input
                required={isRequired}
                size="md"
                type="text"
                id={name}
                name={name}
                autoComplete={name}
                // bg={THEME.backgroundColor}
                // borderWidth={THEME.borderWidth}
                // borderStyle={THEME.borderStyle}
                borderColor={isErrored ? 'red.500' : ""}
                // bg={'white'}
                // borderWidth={'1.5px'}
                // borderStyle={'solid'}
                // borderColor={isErrored ? 'red.500' : 'gray.100'}
                // borderColor={'black'}
                transition="all 0.1s ease-in-out"
                borderRadius={'sm'}
                _placeholder={{ color: 'gray.400' }}
                _hover={{
                  borderColor: '#CBD5E0',
                }}
                _focus={{
                  borderColor: '#006FCF',
                  boxShadow: '0 0 0px 1px #2A87D0',
                  //   borderWidth: '1.6px',
                }}
                _autofill={{
                  boxShadow: '0 0 0px 1000px white inset',
                  WebkitTextFillColor: 'black',
                  transition: 'background-color 5000s ease-in-out 0s',
                }}
                {...rest}
                ref={ref}
              />
            </Box>
          </InputGroup>
        )}

        {errorMessage && (
          <Text fontSize="sm" color="red.500" mt="1">
            {errorMessage}
          </Text>
        )}
      </Field.Root>
    );
  },
);

TextInput.displayName = 'TextInput';

export { TextInput };
