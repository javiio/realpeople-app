import { Dimensions } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const calcCardDimensions = () => {
  const { width, height } = Dimensions.get('window');
  const MIN_H = 540;
  const MAX_H = 540;
  const MAX_W = 390;
  let cardHeight = (height * 2) / 3;

  if (cardHeight > MAX_H) {
    cardHeight = MAX_H;
  } else if (cardHeight < MIN_H) {
    cardHeight = MIN_H;
  }

  let marginTop = (height - cardHeight - 64) / 3;
  if (marginTop < 20) {
    marginTop = 20;
  } else if (marginTop > 90) {
    marginTop = 90;
  }

  let marginHorizontal = 0;
  if (width - 40 > MAX_W) {
    marginHorizontal = (width - 40 - MAX_W) / 2;
  }

  return {
    height: cardHeight,
    marginTop,
    marginHorizontal,
  };
};
