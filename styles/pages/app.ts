import { styled } from '..';

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  height: '100vh',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: 480
  },

  img: {
    width: 350,
    height: 350,
    borderRadius: '50%'
  },

  h1: {
    textTransform: 'uppercase'

  }
});

export const SocialsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  button: {
    padding: '1rem',
    borderRadius: 25,
    border: 0,
    background: '$main',
    color: '$white',
    letterSpacing: 2
  }
});