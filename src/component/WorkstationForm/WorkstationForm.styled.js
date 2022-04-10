import styled from 'styled-components';

const StyledWorkstationForm = styled.form`
    padding: 2rem;
    width: 70%;
    border: 1px solid rgb(var(--color-line));
    border-top: 3px solid rgb(var(--color-alfa));
    
    & label {
       margin-left: 2rem;
       margin-right: 2rem;
       margin-top: 2.5rem;
       color: rgb(var(--color-alfa));
    }

    & > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 2rem;
    }
`

export default StyledWorkstationForm;