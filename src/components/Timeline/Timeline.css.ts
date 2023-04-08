import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { up, tokens, down } from '~@styles';

export const root = style(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: 'auto',
    minHeight: 1080,
    height: 1100,
    marginLeft: '4.5rem',
    marginRight: '4.5rem',
  },
  'root',
);

export const timelineContainer = style(
  {
    display: 'inline-flex',
    maxWidth: 1330,
    maxHeight: 42,
    background: '#f1f1f1 linear-gradient(90deg, #f1f1f1 75%, #f1f1f1 100%)',
    borderRadius: 21,
    height: 'auto',
    minHeight: 42,
    width: '100%',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    '@media': {
      '(prefers-color-scheme: dark)': {
        vars: {
          background: '#333333 linear-gradient(90deg, #333333 75%, #333333 100%)',
        },
      },
    },
  },
  'container',
);

export const timelineLogoContainer = style(
  {
    '@media': {
      '(prefers-color-scheme: dark)': {
        vars: {
          borderRadius: '21px',
          height: '42px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
  },
  'logo',
);

export const timelineLogoContainerVariant = styleVariants(
  {
    contrast: {
      width: 142,
      '@media': {
        '(prefers-color-scheme: dark)': {
          vars: {
            backgroundColor: '#A4A4A4',
          },
        },
      },
    },
    target: {
      width: 104,
      backgroundColor: '#F5F5F6',
      '@media': {
        '(prefers-color-scheme: dark)': {
          vars: {
            backgroundColor: '#333333',
          },
        },
      },
    },
    default: {},
  },
  'variant',
);

export const timeline = style(
  {
    display: 'inline-flex',
    width: '97%',
    height: 2,
    background: '#cccccc linear-gradient(90deg, rgba(204,204,204,1) 67%, rgba(51,51,51,1) 100%)',
    opacity: 1,
    borderRadius: '100%',
    zIndex: 1,
    listStyleType: 'none',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media': {
      '(prefers-color-scheme: dark)': {
        vars: {
          background: '#515151 linear-gradient(90deg, #515151 67%, #515151 100%)',
        },
      },
    },
  },
  'line',
);

export const timelineImageContainer = style(
  {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 404,
    height: 404,
    maxWidth: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  'container',
);

export const timelineImage = style(
  {
    borderRadius: 8,
    boxShadow: '0px 20px 0px 0px rgba(0,0,0,0.12)',
    marginBottom: 20,
    transition: 'box-shadow 0.3s ease-in 0.3s, margin-bottom 0.5s ease-out 0.3s',
    selectors: {
      '&:hover': {
        boxShadow: '0px 12px 0px 0px rgba(0,0,0,0.12)',
        marginBottom: 12,
      },
    },
  },
  'image',
);

export const timelineMilestoneContainer = style(
  {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    flexDirection: 'column',
    position: 'relative',
    right: '82px',
    margin: '4px',
    selectors: {
      ['&:nth-child(1)']: {
        bottom: 173,
        '@media': {
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 183,
            },
            'and (prefers-color-scheme: light)',
          ),
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 178,
            },
            'and (prefers-color-scheme: dark)',
          ),
          ...down(
            tokens.breakpoints.md,
            {
              bottom: 168,
            },
            'and (prefers-color-scheme: dark)',
          ),
        },
      },
      ['&:nth-child(2)']: {
        bottom: 163,
        '@media': {
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 173,
            },
            'and (prefers-color-scheme: light)',
          ),
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 178,
            },
            'and (prefers-color-scheme: dark)',
          ),
          ...down(
            tokens.breakpoints.md,
            {
              bottom: 168,
            },
            'and (prefers-color-scheme: dark)',
          ),
        },
      },
      ['&:nth-child(3)']: {
        bottom: 168,
        '@media': {
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 178,
            },
            'and (prefers-color-scheme: light)',
          ),
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 199,
            },
            'and (prefers-color-scheme: dark)',
          ),
          ...down(
            tokens.breakpoints.md,
            {
              bottom: 189,
            },
            'and (prefers-color-scheme: dark)',
          ),
        },
      },
      ['&:nth-child(7)']: {
        bottom: 147,
        '@media': {
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 157,
            },
            'and (prefers-color-scheme: light)',
          ),
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 178,
            },
            'and (prefers-color-scheme: dark)',
          ),
          ...down(
            tokens.breakpoints.md,
            {
              bottom: 168,
            },
            'and (prefers-color-scheme: dark)',
          ),
        },
      },
      ['&:nth-child(8)']: {
        bottom: 163,
        '@media': {
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 173,
            },
            'and (prefers-color-scheme: light)',
          ),
          ...up(
            tokens.breakpoints.md,
            {
              bottom: 178,
            },
            'and (prefers-color-scheme: dark)',
          ),
          ...down(
            tokens.breakpoints.md,
            {
              bottom: 168,
            },
            'and (prefers-color-scheme: dark)',
          ),
        },
      },
    },
    bottom: 173,
    '@media': {
      ...up(
        tokens.breakpoints.md,
        {
          bottom: 183,
        },
        'and (prefers-color-scheme: light)',
      ),
      ...up(
        tokens.breakpoints.md,
        {
          bottom: 178,
        },
        'and (prefers-color-scheme: dark)',
      ),
      ...down(
        tokens.breakpoints.md,
        {
          bottom: 168,
        },
        'and (prefers-color-scheme: dark)',
      ),
    },
  },
  'milestone',
);

globalStyle(`${timelineMilestoneContainer}:nth-child(2) ${timelineImageContainer} ${timelineImage}`, {
  position: 'relative',
  bottom: 63,
});

globalStyle(`${timelineMilestoneContainer}:nth-child(2) ${timelineImageContainer} ${timelineImage}:hover`, {
  boxShadow: '0px 32px 0px 0px rgba(0,0,0,0.12)',
  marginBottom: 32,
});

globalStyle(`${timelineMilestoneContainer}:nth-child(3) ${timelineImageContainer} ${timelineImage}`, {
  position: 'relative',
  top: 0,
});

globalStyle(`${timelineMilestoneContainer}:nth-child(4) ${timelineImageContainer} ${timelineImage}`, {
  position: 'relative',
  bottom: 24,
});

globalStyle(`${timelineMilestoneContainer}:nth-child(4) ${timelineImageContainer} ${timelineImage}:hover`, {
  boxShadow: '0px 32px 0px 0px rgba(0,0,0,0.12)',
  marginBottom: 32,
});

globalStyle(`${timelineMilestoneContainer}:nth-child(5) ${timelineImageContainer} ${timelineImage}`, {
  position: 'relative',
  bottom: 112,
});

globalStyle(`${timelineMilestoneContainer}:nth-child(6) ${timelineImageContainer} ${timelineImage}`, {
  position: 'relative',
  bottom: 24,
});

globalStyle(`${timelineMilestoneContainer}:nth-child(7) ${timelineImageContainer} ${timelineImage}`, {
  position: 'relative',
  bottom: 97,
});

globalStyle(`${timelineMilestoneContainer}:nth-child(8) ${timelineImageContainer} ${timelineImage}`, {
  position: 'relative',
  bottom: 60,
});

const timelineHighlightBase = style(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    borderRadius: '100%',
    marginTop: 25,
    marginBottom: 25,
  },
  'highlight',
);

export const timelineHighlightVariants = styleVariants(
  {
    target: [
      timelineHighlightBase,
      {
        border: '2px solid #a4a4a4',
      },
    ],
    current: [
      timelineHighlightBase,
      {
        border: 0,
      },
    ],
    default: [
      timelineHighlightBase,
      {
        ':last-child': {
          justifyContent: 'flex-end',
        },
      },
    ],
  },
  'hightlight',
);

export const timelineSpot = style(
  {
    display: 'flex',
    width: 8,
    height: 8,
    color: '#a4a4a4',
    backgroundColor: '#a4a4a4',
    borderRadius: '100%',
  },
  'spot',
);

export const timelineYearText = style(
  {
    color: '#B4B4B4',
    '@media': {
      ['(prefers-color-scheme: dark)']: {
        color: '#A4A4A4',
      },
    },
  },
  'year',
);

export const iconContainer = style(
  {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#B4B4B4',
    '@media': {
      ['(prefers-color-scheme: dark)']: {
        color: '#A4A4A4',
      },
    },
  },
  'icon',
);

export const iconContainerText = style(
  {
    color: '#B4B4B4',
    '@media': {
      ['(prefers-color-scheme: dark)']: {
        color: '#A4A4A4',
      },
    },
  },
  'text',
);

globalStyle(`${timelineHighlightVariants.current} ${timelineSpot}`, {
  backgroundColor: '#333333',
  color: '#333333',
  '@media': {
    ['(prefers-color-scheme: dark)']: {
      backgroundColor: '#212121',
      color: '#212121',
    },
  },
});

globalStyle(`${timelineHighlightVariants.default}:last-child ${timelineSpot}`, {
  backgroundColor: '#cccccc',
  color: '#cccccc',
});
