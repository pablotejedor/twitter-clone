import { extendTheme, theme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },

  colors: {
    primary: theme.colors.twitter,
  },

  fonts: {
    '#root': 'arial',
  },

  styles: {
    global: {
      'html, body, #root': {
        height: '100%',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
      },
      _hover: {
        bg: 'tomato'
      },
      sizes: {
        lg: {
          paddingY: 6,
          fontSize: 'md',
          paddingX: 20,
        },
      },
      variants: {
        solid: {
          backgroundColor: 'primary.500',
          color: 'white',
          fontWeight: 'bold',
        },
      },
    },
  },
});
