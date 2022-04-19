import { globalStyle, style } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens, vars } from '~@styles/theme.css';
import { colorSchema } from '~@styles/utils/color-schema';
import * as classes from '../../Button/Button.css';

export const root = style(
  {
    marginBottom: '24px',
    height: '60px',
    '@media': {
      ...up(tokens.breakpoints.lg, {
        vars: {
          padding: '27px',
          height: 'auto',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        },
      }),
    },
  },
  'root',
);

export const buttonLink = style([classes.root, classes.variants.outlined], 'link');

globalStyle(`a${buttonLink}`, {
  fontSize: '18px',
  lineHeight: '22px',
  letterSpacing: '0',
  color: vars.colors.text,
  textDecoration: 'none',
  '@media': {
    ...colorSchema['@media'],
    ...up(tokens.breakpoints.lg, {
      vars: {
        fontSize: '24px',
        lineHeight: '22px',
      },
    }),
  },
});

export const arrowCurve = style(
  {
    left: '20px',
    position: 'relative',
    bottom: '0',
    '@media': {
      ...up(tokens.breakpoints.lg, {
        vars: {
          bottom: '20px',
        },
      }),
    },
  },
  'arrowCurve',
);
