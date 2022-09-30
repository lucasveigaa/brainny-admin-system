import { styled } from "../../../styles";


export const HeaderContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 180,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  height: '100vh',
  backgroundColor: '#FFFFFF',
})

export const LogoContainer = styled('div', {
  paddingTop: '2rem',
  paddingBottom: '2rem',
})

export const IconContainer = styled('div', {
  borderTop: '1px solid rgba(0, 0, 0, 0.08)',
  borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  borderLeft: '4px solid $principalColor',
  padding: '2.7rem 1.5rem',

  color: '$principalColor',
  fontSize: '0.875rem',
  
  img: {
    marginRight: '0.875rem',
  }
})

export const SignoutContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: '1.5rem',
})