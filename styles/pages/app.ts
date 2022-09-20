import { styled } from '..';

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  height: '100vh',

  div: {
    padding: '1rem 0',
    maxWidth: 480,
    color: '$subtitle'
  },

  img: {
    width: 350,
    height: 350,
    borderRadius: '50%'
  },

  h1: {
    textTransform: 'uppercase',
    color: '$text'
  }
});

export const SocialsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  'button': {
    padding: '0.6rem 1rem',
    borderRadius: 30,
    border: 0,
    background: '$main',
    color: '$white',
    letterSpacing: 2,
    boxShadow: '0px 4px 6px rgb(134 151 168 / 10%)',
  },

  div: {
    display: 'flex',
    flexDirection: 'row',
  }

});

export const SocialButton = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  background: '$white',
  padding: 8,
  borderRadius: 8,
  marginLeft: 8,
  cursor: 'pointer',
  boxShadow: '0px 4px 6px rgb(134 151 168 / 10%)',
  textDecoration: 'none',

  '&:hover': {
    filter: 'brightness(0.9)'
  }
});

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 30,
});

export const SectionContainer = styled('section', {
  maxWidth: 1080,
  padding: '80px 0',

  span: {
    position: 'relative',
    fontSize: 10,
    paddingLeft: 80,
    textTransform: 'uppercase',

    '&.top-section:before': {
      content: "",
      position: 'absolute',
      left: 0,
      top: 4,
      width: 50,
      height: 1,
      background: '#333',
    }
  },

  h2: {
    letterSpacing: 2,
    fontWeight: 600,
    textTransform: 'uppercase',
    margin: '1rem 0'
  }
});

export const AboutMe = styled('article', {
  background: '$white',
  padding: '2.5rem',
  borderRadius: 30,

  p: {
    fontSize: 18,
    lineHeight: 1.6
  }
});

export const Skills = styled('ul', {
  display: 'flex',
  
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '2.5rem',
  background: '$white',
  padding: '2.5rem',
  borderRadius: 20,
});

export const SkillsItem = styled('li', {
  listStyle: 'none',
  textAlign: 'center',
  width: 80,
  padding: 10,
  borderRadius: 10,
  border: '1px solid #eee',
  boxShadow: '0px 4px 6px rgb(134 151 168 / 10%)',

  img: {
    minWidth: 35,
    minHeight: 35
  },

  p: {
    fontSize: '0.875rem'
  }
});