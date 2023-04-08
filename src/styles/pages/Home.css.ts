import { style } from '@vanilla-extract/css';
import { up, tokens } from '~@styles';

export const root = style(
  {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    '@media': {
      ...up(tokens.breakpoints.md, {
        flexDirection: 'column',
      }),
    },
  },
  'root',
);

export const background = style(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(/images/Eduardo_Silveira_tragetoria--sombra.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1462px 358px',
    backgroundPosition: '17px 11px',
    transition: '300ms ease-out',
    overflow: 'auto',
    selectors: {
      '&:hover': {
        backgroundPosition: '17px 16px',
      },
    },
  },
  'background',
);

export const arrowDown = style(
  {
    alignSelf: 'flex-start',
  },
  'arrowDown',
);

export const timeLineSection = style(
  {
    overflowX: 'auto',
    padding: '27px 27px 0',
    '@media': {
      ...up(tokens.breakpoints.md, {
        padding: '0px 140px',
      }),
    },
  },
  'timelineSection',
);

export const arrow = style(
  {
    alignSelf: 'flex-end',
    position: 'relative',
    top: 50,
  },
  'arrow',
);

export const arrowCurve = style(
  {
    alignSelf: 'flex-start',
    position: 'relative',
    top: 520,
    left: 205,
  },
  'arrowCurve',
);
