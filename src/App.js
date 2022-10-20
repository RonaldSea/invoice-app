import React from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ItemsList } from './components/ItemsList';
import { Header } from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex maxH="100vh" p={4} pt={6} maxW="550px" mx="auto" direction="column" gap={5}>
        <Header />
        <ItemsList />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
