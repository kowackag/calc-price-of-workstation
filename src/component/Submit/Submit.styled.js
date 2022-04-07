import styled from 'styled-components';

const StyledSubmit = styled.button`
    position: relative;
    display: block;
    padding: 1rem 5rem;
    margin: auto;
    border: 1px solid rgb(var(--color-line));
    background-color: rgba(var(--color-alfa), 0.1);
    color: rgb(var(--color-alfa));
    font-weight: bold;
    text-align: center;
    cursor: pointer;
   
     &::before {
        content: 'Dodaj';
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