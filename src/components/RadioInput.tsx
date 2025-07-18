'use client';

import { HStack, RadioGroup, Text } from '@chakra-ui/react'; // Adicione 'Text' e 'Box' se for usar
import { useState } from 'react';

const MyRadioGroupComponent = () => {
  // Renomeado para clareza
  const [value, setValue] = useState<string | null>(null);

  return (
    <RadioGroup.Root value={value} onValueChange={(e) => setValue(e.value)}>
      <HStack gap="6">
        {items.map((item) => (
          <RadioGroup.Item
            key={item.listType}
            value={item.listType}
            // Adicione estilos ao item para que ele seja clicável e tenha espaçamento interno
          >
            {/* O input escondido para a funcionalidade */}
            <RadioGroup.ItemHiddenInput />

            {/* O indicador visual do rádio (o círculo) */}
            <RadioGroup.ItemIndicator />

            {/* O texto do item do rádio */}
            <RadioGroup.ItemText>
              <Text fontSize="md" color="gray.700">
                {' '}
                {/* Use Text para controle de estilo */}
                {item.description}
              </Text>
            </RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </HStack>
    </RadioGroup.Root>
  );
};

export default MyRadioGroupComponent;

const items = [
  {
    listType: 'marriage',
    caption: 'Lista de Casamento',
    url: '/images/icons/giftlisttypes/marriage.svg',
    description:
      'O grande dia chegou! Hora de montar uma lista de presentes exclusiva para o casal.',
  },
  {
    listType: 'birthday',
    caption: 'Lista de Aniversário',
    url: '/images/icons/giftlisttypes/birthday.svg',
    description:
      'Mais um ano de vida! Organize uma lista especial para marcar seu dia.',
  },
  {
    listType: 'newHome',
    caption: 'Chá de Casa Nova',
    url: '/images/icons/giftlisttypes/house.svg',
    description:
      'Monte uma lista para começar no seu novo lar com uma cozinha completa.',
  },
  {
    listType: 'wedding',
    caption: 'Bodas',
    url: '/images/icons/giftlisttypes/wedding.svg',
    description:
      'Comemore suas bodas de forma especial, monte sua lista e compartilhe entre família e amigos.',
  },
  {
    listType: 'baby',
    caption: 'Chá de Bebê',
    url: '/images/icons/giftlisttypes/baby.svg',
    description:
      'A Família está crescendo! Prepare uma lista para receber com carinho seu bebê.',
  },
  {
    listType: 'other',
    caption: 'Outros',
    url: '/images/icons/giftlisttypes/other.svg',
    description: 'Prepare uma lista para qualquer ocasião.',
  },
];
