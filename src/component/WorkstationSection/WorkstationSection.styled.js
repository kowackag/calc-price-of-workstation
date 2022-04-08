import styled from 'styled-components';

const StyledWorkstatnionSection = styled.article`
    padding: 3rem;
    border: 1px solid rgb(var(--color-line));
    border-top: 3px solid rgb(var(--color-alfa));

    & h2 { 
        margin-bottom: 2rem;
    }

    & p { 
        font-style: italic;
    }
    & > label {
        font-style: italic;
        font-size: 1.5rem;
    }

    & div {
        text-align: end;
        padding: 0.5rem 2rem;
    }
    & div > label {
        margin-right: 1rem;
        font-size: 1.3rem;
        font-style: italic;
    }

    & div > input {
        width: 1rem;
        height: 1rem;
        font-size: 1rem;

        &::after {
            content: " ";
            background-color: white;
            border: 1px solid grey;
            display: inline-block;
            visibility: visible;
            width: 1.2rem;
            height: 1.2rem;
        }

        &:checked::after {
            content: "";
            display: inline-block;
            background-color: rgb(var(--color-alfa));
            border: 1px solid rgb(var(--color-alfa));
            color: white;
        }
    }
   
`

export default StyledWorkstatnionSection;