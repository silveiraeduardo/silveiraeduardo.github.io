import { style } from '@vanilla-extract/css';
import { down, up } from '~@styles/breakpoints';
import { tokens } from '~@styles/theme.css';

export const root = style(
  {
    height: 'auto',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '4.1875rem',
    letterSpacing: '-2px',
    marginBottom: '24px',
    '@media': {
      ...up(tokens.breakpoints.lg, {
        vars: {
          maxWidth: '907px',
          lineHeight: '9rem',
          letterSpacing: '-5px',
        },
      }),
    },
  },
  'root',
);

export const circleOutlined = style(
  {
    '@media': {
      ...down(tokens.breakpoints.xl, {
        vars: {
          width: '33px',
          height: '30px',
        },
      }),
      ...down(tokens.breakpoints.xs, {
        vars: {
          display: 'none',
        },
      }),
    },
  },
  'circleOutlined',
);

export const circleContained = style(
  {
    '@media': {
      ...down(tokens.breakpoints.xl, {
        vars: {
          width: '48px',
          height: '30px',
        },
      }),
      ...down(tokens.breakpoints.xs, {
        vars: {
          display: 'none',
        },
      }),
    },
  },
  'circleContained',
);

export const line = style(
  {
    marginBottom: '25px',
    '@media': {
      ...down(tokens.breakpoints.xl, {
        vars: {
          display: 'none',
        },
      }),
    },
  },
  'line',
);

export const problems = style(
  {
    backgroundImage: `url("${process.env.NEXT_PUBLIC_URL}/svg/problemas.svg")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 100%',
    '@media': {
      ...down(tokens.breakpoints.xl, {
        vars: {
          backgroundSize: '65% auto',
        },
      }),
    },
  },
  'problems',
);
