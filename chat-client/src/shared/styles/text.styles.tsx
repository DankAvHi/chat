import { css } from "styled-components";
import { colors } from "./colors.styles";

export const accientTextMixin = css`
    color: ${colors.accentColor};
`;

export const textMixins = { accientTextMixin };
