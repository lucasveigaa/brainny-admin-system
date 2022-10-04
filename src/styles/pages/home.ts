import { styled } from "..";


export const Container = styled('div', {
  padding: '1rem 7.5rem',
  background: '#330693',

  '@media (max-width: 768px)': {
    padding: '1rem'
  },

  '@media (max-width: 500px)': {
    fontSize: '0.875rem',
  },
})  

export const ContentContainer = styled('div', {
  marginTop: '2rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridAutoFlow: 'dense',

  '@media (max-width: 850px)': {
    alignItems: 'center',
    gridTemplateColumns: '1fr',
  },


  div: {
    margin: 'auto 0',

    span:{
      fontWeight: 300,
      fontSize: '1.5rem',
      letterSpacing: '0.165em',
      color: '$white'
    },

    h1: {
      fontWeight: 800,
      fontSize: '2.5rem',
      color: '$white',
      lineHeight: '60px',

      display: 'inline',

      '&.points-control': {
        color: '$secundaryColor',
      },
    },

    p: {
      fontSize: '1.125rem',
      color: '$white',
      lineHeight: '27px',
      marginBottom: '1.875rem',
    },

    a: {
      textDecoration: 'none',
      color: '$white',
      borderRadius: 5,
      marginRight: '1rem',
      transition: 'all 0.2s',

      '&.sign-now': {
        backgroundColor: '$secundaryColor',
        padding: '0.8rem 1.5rem',
      },

      '&.see-plans': {
        border: '1px solid #fff',
        padding: '0.8rem 2.3rem',
      },

      '&:hover': {
        backgroundColor: '$white',
        color: '$principalColor',
        border: '1px solid $secundaryColor',
      },
    }
  }
})

export const LogoCompanies = styled('div', {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
})