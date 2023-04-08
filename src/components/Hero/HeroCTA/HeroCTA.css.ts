import { globalStyle, style } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens, vars } from '~@styles/theme.css';
import { colorSchema } from '~@styles/utils/color-schema';
import * as classes from '../../Button/Button.css';

export const root = style(
  {
    height: '60px',
    selectors: {
      '&:hover:after': {
        content: '💭',
        position: 'relative',
        fontSize: '24px',
        bottom: '1rem',
        right: '3rem',
      },
    },
    '@media': {
      ...up(tokens.breakpoints.md, {
        marginBottom: '28px',
        selectors: {
          '&:hover:after': {
            right: '4rem',
          },
        },
      }),
      ...up(tokens.breakpoints.lg, {
        vars: {
          padding: '27px',
          height: 'auto',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        },
        selectors: {
          '&:hover:after': {
            bottom: '2rem',
          },
        },
      }),
      ...up(tokens.breakpoints.xl, {
        selectors: {
          '&:hover:after': {
            right: '4rem',
          },
        },
      }),
    },
  },
  'root',
);

export const buttonLink = style(
  [
    classes.root,
    classes.variants.outlined,
    {
      width: '178px',
      '@media': {
        ...up(tokens.breakpoints.md, {
          width: '226px',
        }),
      },
    },
  ],
  'link',
);

globalStyle(`a${buttonLink}`, {
  fontSize: '18px',
  lineHeight: '22px',
  letterSpacing: '0',
  color: vars.colors.text,
  textDecoration: 'none',
  '@media': {
    ...colorSchema['@media'],
    ...up(tokens.breakpoints.md, {
      vars: {
        fontSize: '22px',
        lineHeight: '20px',
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
      ...up(tokens.breakpoints.md, {
        vars: {
          bottom: '20px',
        },
      }),
    },
  },
  'arrowCurve',
);
