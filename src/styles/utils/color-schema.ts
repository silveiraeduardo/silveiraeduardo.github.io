import { vars } from '../theme.css';

export const colorSchema = {
  '@media': {
    '(prefers-color-scheme: light)': {
      vars: {
        color: vars.colors.background,
        backgroundColor: vars.colors.text,
      },
    },
    '(prefers-color-scheme: dark)': {
      vars: {
        color: vars.colors.text,
        backgroundColor: vars.colors.background,
      },
    },
  },
};

export const foregroundColorSchema = {
  '@media': {
    '(prefers-color-scheme: light)': {
      vars: {
        color: vars.colors.background,
      },
    },
    '(prefers-color-scheme: dark)': {
      vars: {
        color: vars.colors.text,
      },
    },
  },
};

export const backgroundColorSchema = {
  '@media': {
    '(prefers-color-scheme: light)': {
      vars: {
        backgroundColor: vars.colors.text,
      },
    },
    '(prefers-color-scheme: dark)': {
      vars: {
        backgroundColor: vars.colors.background,
      },
    },
  },
};
