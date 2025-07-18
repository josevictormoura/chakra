// import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { defaultSystem } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  // </React.StrictMode>,
);
