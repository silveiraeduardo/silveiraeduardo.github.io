import { style, styleVariants } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens, vars } from '~@styles/theme.css';

export const root = style(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
    height: '40px',
    fontSize: '18px',
    lineHeight: '15px',
    cursor: 'pointer',
    opacity: 0.85,
    '@media': {
      ...up(tokens.breakpoints.md, {
        vars: {
          height: '52px',
          fontSize: '24px',
          lineHeight: '22px',
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
        ...up(tokens.breakpoints.md, {
          vars: {
            border: `solid 2px ${vars.colors.primary}`,
          },
        }),
      },
      ':hover': {
        opacity: 1,
        backgroundColor: vars.colors.primary,
        color: vars.colors.text,
        content: '',
      },
    },
    floated: {
      borderRadius: '39px',
      boxShadow: '0px 12px 24px #FFFFFF4F',

      '@media': {
        '(prefers-color-scheme: light)': {
          vars: {
            boxShadow: '0px 12px 24px #0000001F',
            backgroundColor: vars.colors.background,
            color: vars.colors.background,
          },
        },
        ...up(tokens.breakpoints.md, {
          vars: {
            height: '60px',
            fontSize: '14px',
            lineHeight: 'unset',
          },
        }),
      },
    },
  },
  'variants',
);
