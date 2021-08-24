import { COLORS } from './constants';

export function getSaberColor(isJedi) {
  if (typeof isJedi !== 'boolean') return undefined;

  return isJedi ? COLORS.GREEN : COLORS.RED;
}