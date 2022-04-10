import styled from 'styled-components';

const StyledInput = styled.div`
    display: block;
    position: relative;
   
    & > span {
        display:inline-block;
        position: absolute;
        top:0;
        left: 15rem;
        padding: 1rem 0;  
        color: rgba(var(--color-alfa), 0.5);
        font-size: 1.2rem;
    } 
    
    & > input { position: relative;
        display: block;
        padding: 1rem;
        margin-left: 2rem;
        height: 3.5rem;
        outline: none;
        border: 1px solid rgb(var(--color-line));
        
        color: rgb(var(--color-font));
        
        &:-webkit-autofill {
            box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
            -webkit-text-fill-color: rgb(var(--color-font)) !important;
        }
    }
`

export default StyledInput;