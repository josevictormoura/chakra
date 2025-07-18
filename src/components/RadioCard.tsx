import { HStack, RadioCard } from '@chakra-ui/react';

const RadioCardComponente = () => {
  return (
    <div>
      <RadioCard.Root defaultValue="next">
        <RadioCard.Label>Select framework</RadioCard.Label>
        {items.map((item) => (
          <RadioCard.Item color={'red'} key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemContent>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemDescription>
                  {item.description}
                </RadioCard.ItemDescription>
              </RadioCard.ItemContent>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </RadioCard.Root>
    </div>
  );
};

export default RadioCardComponente;

const items = [
  { value: 'next', title: 'Next.js', description: 'Best for apps' },
  { value: 'vite', title: 'Vite', description: 'Best for SPAs' },
  { value: 'astro', title: 'Astro', description: 'Best for static sites' },
];
