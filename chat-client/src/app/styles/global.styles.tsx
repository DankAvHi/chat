import * as styled from "styled-components";
import { colors, fontsMixins, stylesVariables } from "@/shared";

export const GlobalStyles = styled.createGlobalStyle`
    ${fontsMixins}
    * {
        list-style: none;
        margin: 0;

        border: none;

        padding: 0;

        background: transparent;

        box-sizing: border-box;
        scroll-behavior: smooth;

        font-family: ${stylesVariables.appFontFamily};
        font-size: ${stylesVariables.appFontSize};
        font-weight: ${stylesVariables.appFontWeight};
        text-decoration: none;
        color: ${colors.black00};
    }

    a,
    button,
    input[type="submit"] {
        cursor: pointer;
    }

    img {
        user-drag: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    a,
    p,
    span {
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
    }

    html,
    body {
        min-height: 100%;

        background-color: ${stylesVariables.appBackgroundColor};
    }
`;
