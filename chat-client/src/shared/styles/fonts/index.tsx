import { css } from "styled-components";
import { sansSerifFontMixin, sansSerifFontName } from "./sansSerif.font";

export const fontsMixins = css`
    ${sansSerifFontMixin}
`;

export const fontsNames = { sansSerifFontName };

export const fonts = { mixins: fontsMixins, names: fontsNames };
