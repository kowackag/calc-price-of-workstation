import styled from 'styled-components';

const StyledWorkstationTable = styled.article`
    padding: 6rem;
    border: 1px solid rgb(var(--color-line));
    border-top: 3px solid rgb(var(--color-alfa));

    & h2 { 
        margin-bottom: 2rem;
    }

    & table {
        margin: 0 auto;
        width: 100%;
        border: none;
        border: solid 1px rgba(var(--color-line), .6);
        border-collapse:collapse;
        text-align: center;

        & tr {
            height: 5rem;
            padding: 1rem;
            border: solid 1px rgb(var(--color-line));
        }

        & thead, tfoot {
            background-color:rgb(var(--color-alfa));
            color: rgb(var(--color-beta)); 
        }

        & tbody {
            & th {
                padding: 0 2rem;
                background-color:rgb(var(--color-beta));
                font-size: 2rem;
                text-align: start;
            }
            & th:last-child {
                color:rgb(var(--color-contrast));
                text-align: end;
            }
            & td {
                padding: 0 2rem;
            }

            & td:first-child {
                text-align: start;
            }
        }
    }
`

export default StyledWorkstationTable;