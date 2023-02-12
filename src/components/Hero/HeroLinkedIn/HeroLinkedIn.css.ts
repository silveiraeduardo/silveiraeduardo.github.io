import { style } from '@vanilla-extract/css';
import * as classes from '~@components/Button/Button.css';
import { down, tokens, up, vars } from '~@styles';

export const root = style(
  [
    classes.root,
    classes.variants.floated,
    {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '39px',
      width: '82px',
      height: '52px',
      padding: '0',
      margin: '0',
      '@media': {
        '(prefers-color-scheme: light)': {
          vars: {
            boxShadow: '0px 12px 24px #0000001F',
            backgroundColor: vars.colors.background,
          },
        },
        ...up(tokens.breakpoints.md, {
          width: 300,
          maxWidth: 300,
          justifyContent: 'space-around',
          marginLeft: 'auto',
          marginBottom: 90,
        }),
        ...down(tokens.breakpoints.md, {
          position: 'fixed',
          top: '90%',
          right: '5%',
          zIndex: 2,
          opacity: 1,
        }),
      },
    },
  ],
  'linkedin',
);

export const content = style(
  {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    selectors: {
      '&:after': {
        content: '🍏',
        fontSize: '24px',
        position: 'relative',
        bottom: '1rem',
        left: '1rem',
        textDecoration: 'none',
      },
      '&:-webkit-any-link': {
        textDecoration: 'none',
      },
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
  'content',
);

export const iconContainer = style(
  {
    display: 'flex',
    alignContent: 'center',
    justifyItems: 'center',
    width: 32,
    height: 32,
    backgroundColor: vars.colors.background,
    borderRadius: '50%',
    padding: vars.spacing.s1,
    '@media': {
      '(prefers-color-scheme: light)': {
        vars: {
          backgroundColor: vars.colors.text,
        },
      },
      ...up(tokens.breakpoints.md, {
        width: 38,
        height: 38,
      }),
    },
  },
  'iconContainer',
);

export const text = style(
  {
    vars: {
      color: vars.colors.background,
      marginLeft: `calc(${vars.spacing.s3} + ${vars.spacing.s0})`,
      fontWeight: '300',
      letterSpacing: '-0.6px',
      width: '197px',
    },
    '@media': {
      '(prefers-color-scheme: light)': {
        vars: {
          color: vars.colors.text,
        },
      },
    },
  },
  'text',
);
