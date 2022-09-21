import { styled } from '..';

export const AsideMenu = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  background: '$main',
  width: 110,
  height: '100vh',
  left: 0,

  nav: {
    padding: 26
  },

  ul: {

  },

  li: {
    listStyle: 'none'
  },

  '@media(max-width: 720px)': {
    display: 'none'
  }
});

export const MenuItem = styled('a', {
  '&.menu-item': {
    display: 'inline-block',
    padding: '13px 17px',
    marginBottom: 10,
    borderRadius: 6,
    width: '100%',
    color: '$white',
    textDecoration: 'none',
  }
});

export const WrapperContainer = styled('div', {
  width: 'calc(100% -90px)',
  marginLeft: 90,
  overflow: 'hidden',

  '@media(max-width: 720px)': {
    width: '100%',
    marginLeft: 0
  }
});

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 30,
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
  },

  '@media(max-width: 720px)': {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '70vh',

    img: {
      width: 250,
      height: 250,
    }
  }
});

export const SocialsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1rem',

  'button': {
    padding: '0.6rem 1rem',
    borderRadius: 30,
    border: 0,
    background: '$main',
    color: '$white',
    letterSpacing: 2,
    boxShadow: '0px 4px 6px rgb(134 151 168 / 10%)',

    '&:hover': {
      filter: 'brightness(0.9)'
    }
  },

  div: {
    display: 'flex',
    flexDirection: 'row',
    filter: ''
  },

  '@media(max-width: 680px)': {
    flexDirection: 'column'
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
  padding: '3rem 0',

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
  },

  '@media(max-width: 680px)': {
    padding: '1rem',
  }
});

export const Skills = styled('ul', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '2rem',
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