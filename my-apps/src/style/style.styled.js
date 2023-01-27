import styled from 'styled-components';

const Container = styled.div`
width: 100%;

display: ${({dis}) => dis};
align-items: ${({ali}) => ali};
flex-direction: ${({fD}) => fD};
justify-content: center;
background: rgb(10,38,51);
background: linear-gradient(90deg, rgba(10,38,51,1) 0%, rgba(0,43,62,1) 100%);
`

const DivCont = styled.div`
display: ${({dis}) => dis};
align-items: ${({ali}) => ali};
flex-direction: ${({fD}) => fD};
justify-content: ${({jC}) => jC};
color:${({col}) => col};
`


export {Container,DivCont}