import styled from 'styled-components';

const StyledApp = styled.section`
     & h1 {
        margin-bottom: 4rem;
        text-align: center;
        color: rgb(var(--color-alfa));
    }

    & > div {
        display: flex;
    }
`


export default StyledApp;
