import styled, {css} from 'styled-components';

const StyledSearch = styled.div`
    position: relative;
    border: 1px solid rgb(var(--color-line));
    font-size: 1.2rem;
    color: rgb(var(--color-alfa));
    
    & input {
        padding: 1rem;
        height: 3.5rem;
        width: 100%;
        outline: none;
        border: none;
        color: rgb(var(--color-alfa));
        cursor: context-menu;
        &:-webkit-autofill {
            box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
            -webkit-text-fill-color: rgb(var(--color-font)) !important;
        }
    }

    & ul {
        display: ${props=> !props.active && css`none`};
        position: absolute;
        list-style: none;
        width: 100%;
        z-index:3;
        border: 1px solid rgb(var(--color-line));
        background-color: white;

        & li {
            color: rgb(var(--color-alfa));
            padding:0.4rem;
            cursor: pointer;
        }
    }

`

export default StyledSearch;