import { style, globalStyle } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens, vars } from '~@styles/theme.css';
import { root as heroRoot } from '../Hero.css';

export const root = style(
  [
    heroRoot,
    {
      minHeight: '35px',
      justifyContent: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '316px',
      marginBottom: '0',
      marginLeft: 'auto',
      '@media': {
        ...up(tokens.breakpoints.md, {
          vars: {
            maxWidth: '425px',
            height: '378px',
          },
        }),
      },
    },
  ],
  'anchor',
);

export const divider = style(
  {
    width: '100%',
    borderBottom: `2px solid ${vars.colors.secondary}`,
    maxWidth: '316px',
    margin: '12px 0',
    '@media': {
      ...up(tokens.breakpoints.md, {
        vars: {
          maxWidth: '425px',
          margin: '22px 0 22px auto',
        },
      }),
    },
  },
  'divider',
);

export const text = style(
  {
    marginLeft: 'auto',
  },
  'text',
);

globalStyle(`${root} ${text}`, {
  color: vars.colors.secondary,
  fontSize: '12px',
  textDecoration: 'none',
  height: '14px',
  lineHeight: '1',
  '@media': {
    ...up(tokens.breakpoints.md, {
      vars: {
        height: '21px',
      },
    }),
  },
});
