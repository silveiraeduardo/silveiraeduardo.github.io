import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fonts } from './fonts';
import { spacing } from './spacing';

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
  spacing: {
    s0: 's0',
    s1: 's1',
    s2: 's2',
    s3: 's3',
    s4: 's4',
    s5: 's5',
    s6: 's6',
    s7: 's7',
    s8: 's8',
    s9: 's9',
    s10: 's10',
  },
});

export const tokens = {
  ...fonts,
  colors,
  breakpoints,
  spacing,
};

createGlobalTheme(':root', vars, tokens);
