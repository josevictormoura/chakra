import React from 'react'
import type { UseFormRegister } from 'react-hook-form'
import {
  Box,
  Field,
  Icon,
  Input,
  InputElement,
  InputGroup,
  Skeleton,
  Text,
} from '@chakra-ui/react'

import type { InputProps } from '@chakra-ui/react'

// import AppTheme from '@/core/AppTheme'
export interface iFormValues {
  [key: string]: unknown
}

export interface iTextInputProps extends InputProps {
  name?: string
  theme: 'dark' | 'light'
  label?: string
  icon?: React.ComponentType
  isErrored?: boolean
  errorMessage?: string
  isLoading?: boolean
  isRequired?: boolean
  placeholder?: string
  ref?: React.Ref<HTMLInputElement>
}

const TextInput = React.forwardRef<
  HTMLInputElement,
  iTextInputProps & ReturnType<UseFormRegister<iFormValues>>
>(
  (
    {
      name,
      theme,
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
    // const THEME = AppTheme.inputTheme[theme]

    return (
      <Field.Root required={isRequired}>
        {label && (
          <Field.Label>
            <Text fontWeight={'bold'} fontSize={'16px'}>
              {label}
            </Text>
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
                bg={'white'}
                borderWidth={'1.5px'}
                borderStyle={'black'}
                borderColor={isErrored ? 'red.500' : 'black'}
                transition="all 0.1s ease-in-out"
                borderRadius={'sm'}
                _placeholder={{ color: 'gray.400' }}
                _focus={{
                  borderColor: 'blue',
                  boxShadow: '0 0 0px 2px #2A87D0',
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
    )
  },
)

TextInput.displayName = 'TextInput'

export { TextInput }
