import { style } from '@vanilla-extract/css';

export const footerContainer = style(
  {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  'footer_container',
);

export const footerContainerText = style(
  {
    fontSize: 14,
    lineHeight: 18,
    color: '#CCCCCC',
    '@media': {
      '(prefers-color-scheme: light)': {
        color: '#CCCCCC',
      },
    },
  },
  'footer_container_text',
);
