import { up } from '../breakpoints';
import { tokens } from '../theme.css';

export const typography = {
  text: {
    fontSize: '20px',
    lineHeight: '28px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 0,
    '@media': {
      ...up(tokens.breakpoints.lg, {
        fontSize: '26px',
        lineHeight: '36px',
      }),
    },
  },
  forms: {
    fontSize: '18px',
    lineHeight: '15px',
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: 0,
    '@media': {
      ...up(tokens.breakpoints.lg, {
        fontSize: '24px',
        lineHeight: '22px',
      }),
    },
  },
  heading: {
    h1: {
      fontSize: '48px',
      lineHeight: '54px',
      '@media': {
        ...up(tokens.breakpoints.lg, {
          fontSize: '108px',
          lineHeight: '118px',
        }),
      },
    },
  },
};
