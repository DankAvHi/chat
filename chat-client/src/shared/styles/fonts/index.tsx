import { css } from "styled-components";
import { sansSerifFontName, sansSerifFontMixin } from "./SansSerif.font";

export const fontsMixins = css`
    ${sansSerifFontMixin}
`;

export const fontsNames = { sansSerifFontName };

export const fonts = { mixins: fontsMixins, names: fontsNames };
