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
    padding: 2rem;
    width: 70%;
    border: 1px solid rgb(var(--color-line));
    border-top: 3px solid rgb(var(--color-alfa));
    
    & label {
       margin-left: 2rem;
       margin-right: 2rem;
       color: rgb(var(--color-alfa));
    }
    
`

export default StyledWorkstationForm;