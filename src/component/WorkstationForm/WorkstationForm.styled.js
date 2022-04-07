import styled from 'styled-components';

const StyledWorkstationForm = styled.form`
    display: block;
    padding: 2rem;
    background-color:white;
    border: 1px solid rgb(var(--color-line));
    border-top: 3px solid rgb(var(--color-alfa));
    
    & label {
       margin-left: 2rem;
       color: rgb(var(--color-alfa));
    }

    & > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export default StyledWorkstationForm;