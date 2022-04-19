import { style, styleVariants } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens, vars } from '~@styles/theme.css';

export const root = style(
  {
    borderRadius: '30px',
    height: '40px',
    fontSize: '18px',
    lineHeight: '15px',
    padding: '8px 18px 11px 19px',
    cursor: 'pointer',
    opacity: 0.85,
    '@media': {
      ...up(tokens.breakpoints.lg, {
        vars: {
          height: '60px',
          fontSize: '24px',
          lineHeight: '22px',
          padding: '13px 29px 18px',
        },
      }),
    },
    ':hover': {
      opacity: 1,
    },
  },
  'Button',
);

export const variants = styleVariants(
  {
    text: {
      color: vars.colors.primary,
      backgroundColor: 'transparent',
    },
    contained: {
      color: vars.colors.text,
      backgroundColor: vars.colors.primary,
    },
    outlined: {
      border: `solid 1.6px ${vars.colors.primary}`,
      backgroundColor: 'transparent',
      color: vars.colors.text,
      '@media': {
        '(prefers-color-scheme: light)': {
          vars: {
            color: vars.colors.background,
          },
        },
        ...up(tokens.breakpoints.lg, {
          vars: {
            border: `solid 2px ${vars.colors.primary}`,
          },
        }),
      },
    },
  },
  'variants',
);
