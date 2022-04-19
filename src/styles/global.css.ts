import './utils/fonts.css';
import { tokens, vars } from './theme.css';
import './utils/reset.css';
import { globalStyle } from '@vanilla-extract/css';
import { colorSchema, foregroundColorSchema } from './utils/color-schema';
import { typography } from './utils/typography';
import { down, up } from './breakpoints';

globalStyle('html, body', {
  fontSize: '16px',
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  ...colorSchema,
});

globalStyle('body', {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
  maxWidth: '100vw',
  width: '100%',
  height: 'auto',
});

globalStyle('a, a:-webkit-any-link', {
  fontSize: '20px',
  lineHeight: '28px',
  fontStyle: 'normal',
  fontWeight: '500',
  letterSpacing: 0,
  color: vars.colors.text,
  textDecoration: 'underline',
  '@media': {
    ...foregroundColorSchema['@media'],
    ...down(tokens.breakpoints.md, { color: vars.colors.primary }),
    ...up(tokens.breakpoints.lg, {
      fontSize: '26px',
      lineHeight: '36px',
      fontStyle: 'normal',
      fontWeight: '500',
      letterSpacing: 0,
    }),
  },
});

globalStyle('a:hover', {
  '@media': {
    ...up(tokens.breakpoints.lg, {
      color: vars.colors.primary,
    }),
  },
});

globalStyle('p', {
  ...typography.text,
});

globalStyle('button, input, label', {
  ...typography.forms,
});

globalStyle('h4, h5, h6', {
  fontWeight: 600,
  fontStyle: 'normal',
  letterSpacing: 0,
});

globalStyle('h2, h3', {
  fontWeight: 700,
  fontStyle: 'normal',
  letterSpacing: 0,
});

globalStyle('h1, b, strong', {
  fontWeight: 800,
  fontStyle: 'normal',
  letterSpacing: 0,
});

globalStyle('h1', {
  ...typography.heading.h1,
});

globalStyle('#__next', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',
  height: 'auto',
  minHeight: '100vh',
  maxWidth: '100vw',
  margin: '0 auto',
  padding: '27px 27px 0',
  '@media': {
    ...up(tokens.breakpoints.lg, {
      vars: {
        maxWidth: '1855px',
        padding: '27px 140px 0',
      },
    }),
  },
});
