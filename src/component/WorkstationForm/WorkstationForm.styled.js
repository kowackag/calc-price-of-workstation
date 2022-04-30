import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    & >div>label {
        display:block;
    }
`

export const StyledWorkstationForm = styled.form`
    padding: 2rem 1rem;
    width: 100%;
    border: 1px solid rgb(var(--color-line));
    border-top: 3px solid rgb(var(--color-alfa));
    
    & label {
        display: block;
        margin-right: 1rem;
        margin-left: 1rem;
        color: rgb(var(--color-alfa));
    }

    @media(min-width:762px) {
        width: 70%;
        & label {
            display: inline-block;
        }
    }

`

export default StyledWorkstationForm;