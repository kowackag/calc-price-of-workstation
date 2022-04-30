import styled from 'styled-components';

const StyledWorkstationTable = styled.div`
    margin:0;
    padding:0;
    position: relative;
        & table {
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
            & th { 
                & > div {
                    display: flex; 
                    justify-content: center;
                    align-items: center;
                    & p {
                    display:inline-block;
                    margin-right: 1rem;
                    }
                }
            }
            & th:nth-child(3) {
                display: none;
            }
            @media(min-width:762px) {
                & th:nth-child(3) {
                    display: table-cell;
                }
            }
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

            & td:nth-child(3) {
                display: none;
            }
            @media(min-width:762px) {
                & td:nth-child(3) {
                    display: table-cell;
                }
            }
        }

        & tfoot {
            font-size:2rem;
            & tr:first-child {
                & td:last-child {
                    font-weight: bold;
                    font-size:2.6rem;
                }
            }
            & tr:last-child {
                color: rgb(var(--color-alfa));
                background-color:white;
                font-weight: bold;
            }
        }

`

export default StyledWorkstationTable;