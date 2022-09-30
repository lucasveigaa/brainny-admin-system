import { styled } from "..";


export const HomeContainer = styled('main', {
  display: 'flex',
  background: 'rgba(255, 255, 255, 0.7)',
  padding: '2rem 9.375rem',
  gap: '9.3rem',
})

export const ContainerContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  h1: {
    color: '$principalColor',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginTop: '1.25rem',
  },

  span: {
    color: '$principalColor',
    opacity: 0.7,
    fontSize: '1.56rem',
    textAlign: 'center',
    maxWidth: 380,
  }
  
})

export const ContainerLogin = styled('div', {
  margin: 'auto 0',

  h1: {
    color: '$principalColor',
    fontSize: '2.5rem',
    marginTop: '1rem',
  },

  form: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',

    label: {
      color: '$grey',
      fontSize: '1.25rem'
    },

    div: {
      display: 'flex',
      position: 'relative',

      img: {
        position: 'absolute',
        right: '1rem',
        top: '0.8rem',
      }
    },

    input: {
      flex: 1,
      padding: '0.625rem 0',
      paddingLeft: '1.25rem',
      borderRadius: 5,
      border: '1px solid rgba(32, 41, 46, 0.3)',
    },

    a: {
      marginTop: '0.625rem',
      color: '$principalColor',
      fontSize: '0.9375rem',

      '&:hover': {
        color: '$secundaryColor',
      },
    },

    button: {
      background: '$principalColor',
      borderRadius: 5,
      padding: '0.81rem 0',
      border: 0,
      color: '$white',
      marginTop: '2.5rem',
      cursor: 'pointer',
      transition: 'backgroundColor 0.2s',

      '&:hover': {
        background: '$secundaryColor'
      }
    }
  }

})