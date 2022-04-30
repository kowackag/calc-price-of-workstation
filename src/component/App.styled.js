import styled from 'styled-components';

const StyledApp = styled.article`
     & h1 {
        margin: 3rem;
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
