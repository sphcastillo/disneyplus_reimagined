'use client'

import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/ramabhadra';
// Supports weights 200-900
import '@fontsource-variable/nunito';

const theme = extendTheme({
  fonts: {
    heading: `'Nunito Variable', sans-serif`,
    body: `'Nunito Variable', sans-serif`,
    text: `'Nunito Variable', sans-serif`,
  },
  colors: {
    brand: {
        100: "#fff",
        400: "D8D8D8",
        900: "#14143C"
    }
  }
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}