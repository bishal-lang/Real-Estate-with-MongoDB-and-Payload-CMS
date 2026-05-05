import { createTheme, MantineColorsTuple } from '@mantine/core'

const primaryBlack: MantineColorsTuple = [
  '#f6f6f6',
  '#e7e7e7',
  '#d1d1d1',
  '#b0b0b0',
  '#888888',
  '#6d6d6d',
  '#5d5d5d',
  '#4f4f4f',
  '#454545',
  '#000000',
]

export const theme = createTheme({
  primaryColor: 'black',
  colors: {
    black: primaryBlack,
  },
  fontFamily: 'Manrope, sans-serif',
  headings: {
    fontFamily: 'Noto Serif, serif',
  },
})
