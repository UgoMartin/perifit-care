const ReactNative = require('react-native');

const FastImage = ReactNative.Image;

FastImage.cacheControl = {immutable: 'immutable'};
FastImage.resizeMode = {
  center: 'center',
  contain: 'contain',
  cover: 'cover',
  stretch: 'stretch',
};

module.exports = FastImage;
