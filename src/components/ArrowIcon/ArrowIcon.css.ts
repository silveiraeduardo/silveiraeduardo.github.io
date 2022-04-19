import { style, styleVariants } from '@vanilla-extract/css';
import { down } from '~@styles/breakpoints';
import { tokens } from '~@styles/theme.css';

export const root = style(
  {
    marginBottom: '15px',
    '@media': {
      ...down(tokens.breakpoints.xl, {
        vars: {
          marginBottom: '7.5px',
        },
      }),
    },
  },
  'icon',
);

export const variants = styleVariants({
  right: [root, {}],
  down: [
    root,
    {
      transform: 'rotate(90deg)',
      marginBottom: '0',
      '@media': {
        ...down(tokens.breakpoints.xl, {
          vars: {
            marginBottom: '0',
          },
        }),
      },
    },
  ],
  left: [root, {}],
  up: [root, {}],
});

export const hidden = styleVariants({
  none: [root, {}],
  onlyXs: [
    root,
    {
      '@media': {
        ...down(tokens.breakpoints.xs, {
          vars: {
            display: 'none',
          },
        }),
      },
    },
  ],
});
