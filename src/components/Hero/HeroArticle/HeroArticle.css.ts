import { globalStyle, style } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens } from '~@styles/theme.css';

export const article = style(
  {
    '@media': {
      ...up(tokens.breakpoints.lg, {
        vars: {
          width: '100%',
          height: 'auto',
          maxWidth: '974px',
          fontSize: '26px',
          lineHeight: '36px',
          marginLeft: '63px',
          padding: '27px',
        },
      }),
    },
  },
  'text',
);

globalStyle(`${article} p`, {
  marginBottom: '28px',
  '@media': {
    ...up(tokens.breakpoints.lg, {
      vars: {
        marginBottom: '22px',
        letterSpacing: '-1px',
        fontSize: '26px',
        lineHeight: '36px',
      },
    }),
  },
});
