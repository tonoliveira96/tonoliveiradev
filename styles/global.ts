import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$background'
  },

  'body, input, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400
  }
});