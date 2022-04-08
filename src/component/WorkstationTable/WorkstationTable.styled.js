import styled from 'styled-components';

const StyledWorkstationTable = styled.div`
    margin:0;
    padding:0;
    position: relative;
        & table {
            table-layout: fixed;
            width: 100%;
            border-collapse:collapse;
            text-align: center;
            font-size:1.4rem;
        }

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
                padding: 0 1rem;
            }

            & td:first-child {
                text-align: start;
            }
        }

        & tfoot {
            & td:last-child {
                font-weight: bold;
                font-size:2.6rem;
            }
        }
    
`

export default StyledWorkstationTable;