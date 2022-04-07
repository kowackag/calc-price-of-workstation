import styled, {css} from 'styled-components';

const DefaultStyledButton = styled.div`
    grid-column: 1/2;
    padding: 1rem;
    border: 1px solid rgb(var(--color-line));
    background-color: white;
    color: rgb(var(--color-font));
    font-family: "Roboto", Verdana, sans-serif;
    font-weight: bold;
    text-align: center;
    position: relative;
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
        background-color: rgb(var(--color-font));
        color: white;
        opacity:0;
        transition: opacity 0.6s ease-out; 
        will-change: opacity;      
    }
    &:hover::before {
        opacity:1;
    }
`

const StyledButton = styled(DefaultStyledButton)(props=>props.style);

export default StyledButton;