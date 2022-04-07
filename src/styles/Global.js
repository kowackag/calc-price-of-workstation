import {createGlobalStyle} from 'styled-components';
import latoRegularWoff from "./../fonts/lato-regular-webfont.woff";
import latoRegularWoff2 from "./../fonts/lato-regular-webfont.woff2";
import latoBoldWoff from "./../fonts/lato-bold-webfont.woff";
import latoBoldWoff2 from "./../fonts/lato-bold-webfont.woff2";
import latoItalicWoff2 from "./../fonts/lato-italic-webfont.woff2";
import latoItalicWoff from "./../fonts/lato-italic-webfont.woff";

const GlobalStyle = createGlobalStyle`
    :root {
        --color-font: ${props=>props.theme.colorFont};
        --color-alfa: ${props=>props.theme.colorDark};
        --color-beta: ${props=>props.theme.colorLight};
        --color-contrast:${props=>props.theme.colorContrast};
    }

    @font-face {
        font-family: "Roboto";
        font-style: regular;
        font-weight: 400;
        src:
        url(${latoRegularWoff2}) format('woff2'),
        url(${latoRegularWoff}) format('woff');
    }
    @font-face {
        font-family: "Roboto";
        font-weight: 700;
        src:
        url(${latoBoldWoff2}) format('woff2'),
        url(${latoBoldWoff}) format('woff');
    }
    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 400;
        src:
        url(${latoItalicWoff2}) format('woff2'),
        url(${latoItalicWoff}) format('woff');
    }
    html {
        width:100ww;
        font-size: 10px;
    }

    body {
        width: 100%;
        font-family: "Lato", Verdana, sans-serif;
        font-size: 1.6rem;
        color: rgb(var(--color-font));
        line-height:1.5;
    }
`

export default GlobalStyle;