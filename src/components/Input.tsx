import { Field, HStack, Input, Text } from '@chakra-ui/react';

const InputComponente = () => {
  const text = 'Email';

  return (
    <HStack gap="10" width="full">
      <Field.Root required>
        <Field.Label>
          <Text color="gray.500">{text}</Text>
          <Field.RequiredIndicator />
        </Field.Label>
        <Input placeholder="me@example.com" variant="subtle" />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
          Email <Field.RequiredIndicator />
        </Field.Label>
        <Input placeholder="me@example.com" variant="outline" />
      </Field.Root>
    </HStack>
  );
};

export default InputComponente;
