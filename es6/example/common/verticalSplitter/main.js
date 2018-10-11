'use strict';

const easylayout = require('easy-layout');

const { Splitter, VerticalSplitter } = easylayout;

class MainVerticalSplitter extends VerticalSplitter {
  static fromProperties(properties) {
    const afterSizeableElement = true;

    Object.assign(properties, { afterSizeableElement });

    const mainVerticalSplitter = Splitter.fromProperties(MainVerticalSplitter, properties);

    return mainVerticalSplitter;
  }
}

Object.assign(MainVerticalSplitter, {
  defaultProperties: {
    className: 'main'
  }
});

module.exports = MainVerticalSplitter;
