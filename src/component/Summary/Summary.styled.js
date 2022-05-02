import styled from  'styled-components';

const StyledSummary = styled.article`
    width: 100%;
    padding: 2rem;
    background-color: rgb(var(--color-alfa));
    text-align: center;
    
    & h2 {
        color: white;
        font-size: 2rem;
        text-align: center;
    }
    & form {      
        padding:1rem;
        & div {
            margin-top: 2rem;
            & input+p {
                position: relative;
            }
            & > button {
                /* margin-top:2rem; */
                padding-left: 3rem;
                padding-right: 3rem;
            }
        }
    }
    @media(min-width: 762px) {
        width: 30%;
    }
`
export default StyledSummary; 