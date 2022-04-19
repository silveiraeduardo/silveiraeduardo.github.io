import { globalStyle } from '@vanilla-extract/css';
import { fonts } from '../fonts';

globalStyle('.font', { ...fonts, textAlign: 'left' });

globalStyle('*', {
  ...fonts,
  textAlign: 'left',
  border: 0,
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});
