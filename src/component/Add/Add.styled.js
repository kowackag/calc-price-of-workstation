import styled from 'styled-components';

const StyledApp = styled.span`
    position: absolute;
    font-size: 2.5rem;
    
    & > input {
        padding: 1rem;
        margin-left: 2rem;
        height: 4.6rem;
        outline: none;
        border: 1px solid rgb(var(--color-contrast));
        color: rgb(var(--color-font));
        color: ${props=> props.active && 'rgb(var(--color-contrast))'};
        &:-webkit-autofill {
            box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
            -webkit-text-fill-color: rgb(var(--color-font)) !important;
        }
    }

    & svg {
        position: relative;
        left: 10px;
        color: ${props=> props.active && 'rgb(var(--color-contrast))'};
        cursor: pointer;
    }
`

export default StyledApp;