import {createGlobalStyle} from 'styled-components';
import robotoRegularWoff from "./../fonts/roboto-regular-webfont.woff";
import robotoRegularWoff2 from "./../fonts/roboto-regular-webfont.woff2";
import robotoBoldWoff from "./../fonts/roboto-bold-webfont.woff";
import robotoBoldWoff2 from "./../fonts/roboto-bold-webfont.woff2";
import robotoItalicWoff2 from "./../fonts/roboto-italic-webfont.woff2";
import robotoItalicWoff from "./../fonts/roboto-italic-webfont.woff";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-font: ${props=>props.theme.colorFont};
        --color-alfa: ${props=>props.theme.colorDark};
        --color-beta: ${props=>props.theme.colorLight};
        --color-contrast:${props=>props.theme.colorContrast};
        --color-line:${props=>props.theme.colorLine};
    }

    @font-face {
        font-family: "Roboto";
        font-style: regular;
        font-weight: 400;
        src:
        url(${robotoRegularWoff2}) format('woff2'),
        url(${robotoRegularWoff}) format('woff');
    }
    @font-face {
        font-family: "Roboto";
        font-weight: 700;
        src:
        url(${robotoBoldWoff2}) format('woff2'),
        url(${robotoBoldWoff}) format('woff');
    }
    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 400;
        src:
        url(${robotoItalicWoff2}) format('woff2'),
        url(${robotoItalicWoff}) format('woff');
    }

    html {
        width:100vw;
        font-size: 10px;
    }

    body {
        max-width: 1000px;
        margin: auto;
        padding: 2rem;
        font-family: "Roboto", Verdana, sans-serif;
        font-size: 1.6rem;
        color: rgb(var(--color-alfa));
        line-height:1.5;
    }
`

export default GlobalStyle;