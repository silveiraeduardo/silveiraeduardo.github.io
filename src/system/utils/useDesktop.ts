import { tokens } from '~@styles/theme.css';
import { useMatchMedia } from './useMatchMedia';

export function useDesktop() {
  const matched = useMatchMedia(`screen and (min-width: ${tokens.breakpoints.md})`);
  return matched;
}
