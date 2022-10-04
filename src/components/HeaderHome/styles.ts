import { styled } from "../../styles";

export const Header = styled('header', {
  display: 'flex',
  justifyContent: "space-between",
  alignItems: 'center',

  '@media (max-width: 500px)': {
    flexDirection: 'column',
    gap: '1rem',
  },

  img: {
    cursor: 'pointer',
  },

  div: {
    display: 'flex',
    gap: '2.5rem',

    a: {
      color: "$white",
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',

      '&:hover': {
        textDecoration: 'underline',
      },

      '&:last-child': {
        color: '$principalColor',
        background: '$white',
        padding: '0.8rem 2.3rem',
        borderRadius: 5,
      }
    },

    
  }

})