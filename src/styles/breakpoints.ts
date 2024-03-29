/* eslint-disable @typescript-eslint/ban-types */
export const breakpoints = {
  xs: '359px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

export const up = <T = {}>(minWidth: string, cssProps: T, conditional = '') => {
  return {
    [`screen and (min-width: ${minWidth}) ${conditional}`]: {
      ...cssProps,
    },
  };
};

export const down = <T = {}>(maxWidth: string, cssProps: T, conditional = '') => {
  return {
    [`screen and (max-width: ${maxWidth}) ${conditional}`]: {
      ...cssProps,
    },
  };
};
