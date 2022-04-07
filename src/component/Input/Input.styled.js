import styled from 'styled-components';

const StyledInput = styled.input`
    display: block;
    padding: 1rem;
    margin-bottom: 2.5rem;
    margin-right: 2rem;
    height: 3.5rem;
    outline: none;
    border: 1px solid rgb(var(--color-line));
    
    color: rgb(var(--color-font));
    
    &:-webkit-autofill {
        box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
        -webkit-text-fill-color: rgb(var(--color-font)) !important;
    }
`

export default StyledInput;