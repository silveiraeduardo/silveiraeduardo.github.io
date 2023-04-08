import { style } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens, vars } from '~@styles/theme.css';

export const root = style({
  display: 'inline-flex',
  height: 'auto',
  alignItems: 'center',
  minWidth: '176px',
});

export const imageContainer = style({
  display: 'inline-flex',
  margin: '6px',
  height: 'auto',
});

export const image = style({ display: 'inline-flex' });

export const textContainer = style({
  display: 'inline-flex',
  margin: '6px',
});

export const text = style({
  lineHeight: '21px',
  color: vars.colors.caption,
  fontSize: '20px',
  '@media': {
    ...up(tokens.breakpoints.md, {
      vars: {
        fontSize: '26px',
      },
    }),
  },
});
