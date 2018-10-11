'use strict';

const easy = require('easy');

const { InputElement } = easy;

class ContentTextarea extends InputElement {
  constructor(selector, changeHandler, keyUpHandler) {
    super(selector, changeHandler);

    this.onKeyUp(keyUpHandler);
  }

  onKeyUp(keyUpHandler) {
    this.on('keyUp', keyUpHandler);
  }

  getContent() {
    const value = this.getValue(),
          content = value; ///

    return content;
  }

  setContent(content) {
    const value = content;

    this.setValue(value);
  }

  showError() {
    this.addClass('error');
  }

  hideError() {
    this.removeClass('error');
  }

  parentContext() {
    const getContent = this.getContent.bind(this),
          setContent = this.setContent.bind(this),
          showError = this.showError.bind(this),
          hideError = this.hideError.bind(this);

    return ({
      getContent,
      setContent,
      showError,
      hideError
    });
  }

  static fromProperties(properties) {
    const { onKeyUp } = properties,
          keyUpHandler = onKeyUp, ///
          contentTextarea = InputElement.fromProperties(ContentTextarea, properties, keyUpHandler);

    return contentTextarea;
  }
}

Object.assign(ContentTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'content',
    spellcheck: false
  }
});

module.exports = ContentTextarea;
