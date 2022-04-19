import { style, styleVariants } from '@vanilla-extract/css';
import { up } from '~@styles/breakpoints';
import { tokens, vars } from '~@styles/theme.css';
import { foregroundColorSchema } from '~@styles/utils/color-schema';
import { typography } from '~@styles/utils/typography';

const base = style({
  fontFamily: vars.fontFamily,
});

export const root = style([
  base,
  {
    color: vars.colors.text,
    ...foregroundColorSchema,
  },
]);

export const colors = styleVariants(
  {
    primary: [
      base,
      {
        color: vars.colors.primary,
        '@media': {
          '(prefers-color-scheme: light)': {
            vars: {
              color: vars.colors.primary,
            },
          },
          '(prefers-color-scheme: dark)': {
            vars: {
              color: vars.colors.primary,
            },
          },
        },
      },
    ],
    secondary: [
      base,
      {
        color: vars.colors.secondary,
        '@media': {
          '(prefers-color-scheme: light)': {
            vars: {
              color: vars.colors.secondary,
            },
          },
          '(prefers-color-scheme: dark)': {
            vars: {
              color: vars.colors.secondary,
            },
          },
        },
      },
    ],
    default: [
      base,
      {
        color: vars.colors.text,
        ...foregroundColorSchema,
      },
    ],
  },
  'color',
);

export const variants = styleVariants(
  {
    h1: [
      base,
      {
        ...typography.heading.h1,
      },
    ],
    p: [base, { ...typography.text }],
    small: [
      base,
      {
        ...typography.text,
        fontSize: '18px',
        lineHeight: '22px',
        opacity: 0.85,
        fontWeight: 300,
        '@media': {
          ...typography.text['@media'],
          ...up(tokens.breakpoints.lg, {
            fontSize: '22px',
            lineHeight: '36px',
          }),
        },
      },
    ],
    caption: [
      base,
      {
        ...typography.text,
        fontSize: '12px',
        '@media': {
          ...typography.text['@media'],
          ...up(tokens.breakpoints.lg, {
            fontSize: '18px',
            lineHeight: '36px',
            fontStyle: 'normal',
            fontWeight: 500,
            letterSpacing: 0,
          }),
        },
      },
    ],
  },
  'variant',
);
