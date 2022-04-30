import styled, {css} from 'styled-components';

const DefaultStyledDropdown = styled.div`
    display: inline-block;
    position: relative;
    max-width: 30%;
    margin-bottom: 3rem;
    margin-left:1rem;
    border: 1px solid rgb(var(--color-line));
    font-size: 1.2rem;
    color: rgb(var(--color-alfa));

    & input {
        display: inline-block;
        padding: 1rem;
        height: 4rem;
        width:100%;
        outline: none;
        border: none;
        cursor: context-menu;
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

    & p {
        padding-left: 0;
    }

`
const StyledDropdown = styled(DefaultStyledDropdown)(props=>props.style);

export default StyledDropdown;