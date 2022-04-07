import styled from 'styled-components';

const StyledWorkstationForm = styled.form`
    padding: 2rem;
    background-color:white;
    border: 1px solid rgb(var(--color-line));
    border-top: 3px solid rgb(var(--color-alfa));
    & label {
       color: rgb(var(--color-alfa));
    }

    & > div {
        display: flex;
        flex-wrap: wrap;
        /* grid-template-columns: 1fr 1fr; */
    }
`

export default StyledWorkstationForm;