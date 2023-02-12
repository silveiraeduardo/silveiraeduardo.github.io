import { style } from '@vanilla-extract/css';
import { vars } from '~@styles';

export const root = style({}, 'root');

export const icon = style(
  {
    vars: {
      color: vars.colors.text,
    },
    '@media': {
      '(prefers-color-scheme: light)': {
        vars: {
          color: vars.colors.background,
        },
      },
    },
  },
  'icon',
);
