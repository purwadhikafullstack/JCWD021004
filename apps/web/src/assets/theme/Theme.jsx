import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading:
      '"system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    body: '"system-ui", -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  colors: {
    brand: {
      lightred: '#006BE4', //light-red (button-color)
      redhover: '#f50f5a',
      grey100: '#F1F1F1', // grey-background
      grey200: '#C7C7C7', //grey line
      grey300: '#8A8282', // grey (font)
      grey350: '#707070', // grey-dark(font)
    },
  },
});
