import styled from 'styled-components';

const StyledWorkstatnionSection = styled.article`
    padding: 1rem;
    border: 1px solid rgb(var(--color-line));
    border-top: 3px solid rgb(var(--color-alfa));

    & h2 { 
        margin-bottom: 2rem;
    }

    & .sorted-block {
        text-align: end;
        padding: 0.5rem 2rem;
    }
    & .sorted-block > label {
        margin-right: 1rem;
        font-size: 1.3rem;
        font-style: italic;
    }

    & #sorted {
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

    @media(min-width:762px){
        padding:3rem;
    }
   
`

export default StyledWorkstatnionSection;