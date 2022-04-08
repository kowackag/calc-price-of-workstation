import styled from 'styled-components';

const StyledEditableComponent = styled.section`
    display: flex;
    position: absolute;
    top: 0;
    left:0;
    right:0;
    border: 2px solid rgb(var(--color-alfa));
    box-shadow: 2px 2px 2px rgb(var(--color-alfa)), -2px -2px 2px rgb(var(--color-alfa));
    background-color: white;
    font-size:1.5rem;

    & form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin:auto;
        & label {
            padding:2rem;
            display: block;
            font-weight: bold
        }
        & input {
            color: rgb(var(--color-alfa));
        }
        & button {
            grid-column: 1/3;
        }
    }

`

export default StyledEditableComponent;