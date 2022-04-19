import { style } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens, vars } from '~@styles/theme.css';

export const root = style(
  {
    width: '100%',
    height: 'auto',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    maxWidth: '100vw',
    alignItems: 'flex-start',
  },
  'root',
);

export const artifact = style(
  {
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    border: `solid 2px ${vars.colors.secondary}`,
    width: '30px',
    height: '59px',
    borderBottomColor: 'transparent',
    marginRight: '30px',
    '@media': {
      ...up(tokens.breakpoints.lg, {
        vars: {
          width: '60px',
          height: '122px',
        },
      }),
    },
  },
  'artifact',
);
