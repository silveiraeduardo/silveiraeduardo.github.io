import { style } from '@vanilla-extract/css';

export const root = style(
  {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
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
