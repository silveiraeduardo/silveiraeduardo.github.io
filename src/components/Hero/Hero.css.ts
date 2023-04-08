import { style } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens } from '~@styles/theme.css';

export const root = style(
  {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxWidth: '100vw',
    marginBottom: '48px',
    padding: '27px 27px 0',
    '@media': {
      ...up(tokens.breakpoints.md, {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '0 140px',
      }),
    },
  },
  'root',
);
