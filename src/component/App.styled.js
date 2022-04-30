import styled from 'styled-components';

const StyledApp = styled.section`
     & h1 {
        margin-bottom: 4rem;
        text-align: center;
        color: rgb(var(--color-alfa));
    }

    @media(min-width:762px) {
        & > div {
            display: flex;
        }
    }
`


export default StyledApp;
