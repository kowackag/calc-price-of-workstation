import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    position: relative;
    display: inline-block;
    margin: 0.3rem;
    padding: 0.8rem;
    min-width: 6rem;
    border: 1px solid rgb(var(--color-line));
    background-color: white;
    font-weight: bold;
    text-align: center;
    color: rgb(var(--color-alfa));
    cursor: pointer;

    ${ props=> props.notAnimated ||  css` &::before {
            content: '${props=>props.children}';
            position: absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            padding:0.8rem;
            border: none;
            background-color: rgb(var(--color-alfa));
            color: white;
            opacity:0;
            transition: opacity 0.6s ease-out; 
            will-change: opacity;      
        }
        &:hover::before {
            opacity: 1;
        }
    }`}

    & > svg > path {
        font-size: 3rem;
    }
`

export default StyledButton;