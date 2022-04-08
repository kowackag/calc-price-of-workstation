import styled from  'styled-components';

const StyledSummary = styled.article`
    width: 40%;
    padding: 2rem;
    background-color: rgb(var(--color-alfa));
    
    & h2 {
        color: white;
        font-size: 2.2rem;
        margin-bottom: 2rem;
        text-align: center;
    }

    & form {      
        & div {
            margin-bottom: 3rem;
            /* text-align: center; */
            & > button {
                padding-left: 4rem;
                padding-right: 4rem;
            }
        }
    }

`
export default StyledSummary; 