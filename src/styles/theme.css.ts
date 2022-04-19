import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fonts } from './fonts';

export const vars = createGlobalThemeContract({
  fontFamily: 'font-family',
  colors: {
    background: 'background-color',
    text: 'text-color',
    caption: 'caption-color',
    primary: 'primary-color',
    secondary: 'secondary-color',
  },
  breakpoints: {
    xs: 'extra-small',
    sm: 'small',
    md: 'medium',
    lg: 'large',
    xl: 'extra-large',
  },
});

export const tokens = {
  ...fonts,
  colors,
  breakpoints,
};

createGlobalTheme(':root', vars, tokens);
