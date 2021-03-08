import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const fonts = {
  heading: '\'Lato\', sans-serif',
  body: '\'Lato\', sans-serif',
  mono: '\'Menlo\', monospace'
}

const theme = extendTheme({ colors, fonts })

export default theme
