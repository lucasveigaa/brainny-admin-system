import { styled } from "..";


export const ContainerDashboard = styled('main', {
  display: 'flex',
  backgroundColor: '#E5E5E5',
})

export const ContainerTable = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const SubContainerTable = styled('div', {
  display: 'grid',
  gridTemplateColumns: '350px 250px 1fr',
  marginLeft: '1.875rem',
  paddingLeft: '1rem',
  marginBottom: '1rem',
  marginTop: '4rem',
})

export const ContentColaborator = styled('div',{
  display: 'grid',
  width: 'calc(100vw - 240px)',
  gridTemplateColumns: '350px 250px 1fr',
  backgroundColor: '$white',
  border: '1px solid rgba(32, 41, 46, 0.3)',
  borderRadius: 5,
  margin: '0 1.875rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingLeft: '1rem',
  marginBottom: '1rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '5px solid $secundaryColor',
    paddingLeft: '2.5rem',

    strong: {
      fontSize: '1.375rem',
    },
    span: {
      fontSize: '1rem',
    }
  },

  span: {
    color: '$grey',
    opacity: 0.5,
    fontSize: '1.375rem',
  }
  
})