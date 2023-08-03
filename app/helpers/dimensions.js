import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').width;
const MIN_WIDTH = 250;
const MAX_WIDTH = 390;
const DEFAULT_MARGIN = 20;
const MIN_MARGIN = 8;
const MIN_MARGIN_BREAK = 320;

export const calcWidth = ({
  minWidth = MIN_WIDTH,
  maxWidth = MAX_WIDTH,
  margin = DEFAULT_MARGIN,
  minMargin = MIN_MARGIN,
  minMarginBreak = MIN_MARGIN_BREAK,
  selfCenter = true,
} = {}) => {
  let _margin = margin;
  if (SCREEN_WIDTH <= minMarginBreak && minMargin < margin) {
    _margin = minMargin;
  }

  const width = SCREEN_WIDTH - _margin * 2;

  return {
    width,
    minWidth,
    maxWidth,
    alignSelf: selfCenter ? 'center' : 'normal',
  };
};
