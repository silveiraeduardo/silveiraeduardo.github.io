import { style } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens } from '~@styles/theme.css';

export const root = style(
  {
    width: '100%',
    height: 'auto',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '100vw',
    alignItems: 'center',
    marginBottom: '48px',
    '@media': {
      ...up(tokens.breakpoints.lg, {
        marginBottom: '80px',
      }),
    },
  },
  'root',
);
