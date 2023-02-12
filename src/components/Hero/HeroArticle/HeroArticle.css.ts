import { globalStyle, style } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens } from '~@styles/theme.css';

export const article = style(
  {
    marginTop: '29px',
    '@media': {
      ...up(tokens.breakpoints.md, {
        vars: {
          width: '100%',
          height: 'auto',
          maxWidth: '974px',
          fontSize: '26px',
          lineHeight: '36px',
          marginTop: '61px',
        },
      }),
    },
  },
  'text',
);

globalStyle(`${article} p`, {
  '@media': {
    ...up(tokens.breakpoints.md, {
      vars: {
        marginBottom: '22px',
        letterSpacing: '-1px',
        fontSize: '26px',
        lineHeight: '36px',
      },
    }),
  },
});
