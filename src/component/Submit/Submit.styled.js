import styled from 'styled-components';

const StyledSubmit = styled.button`
    position: relative;
    display: block;
    padding: 1rem 5rem;
    margin: 2rem auto;
    border: 1px solid rgb(var(--color-alfa));
    background-color: white;
    color: rgb(var(--color-alfa));
    font-weight: bold;
    text-align: center;
    text-transform:uppercase;
    cursor: pointer;
   
     &::before {
        content: '${props=>props.children}';
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        padding:1rem;
        border: none;
        background-color: rgb(var(--color-alfa));
        color: white;
        opacity:0;
        transition: opacity 0.4s ease-out; 
        will-change: opacity;     
        z-index: 2; 
    }
    &:hover::before {
        opacity:1;
    }
`

export default StyledSubmit;