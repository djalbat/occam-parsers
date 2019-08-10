'use strict';

const easy = require('easy');

const { Element } = easy;

class HideNullifiedNodesCheckbox extends Element {
  constructor(selector, changeHandler) {
    super(selector);

    if (changeHandler !== undefined) {
      this.onChange(changeHandler);
    }
  }

  onChange(changeHandler, object, intermediateChangeHandler = defaultIntermediateChangeHandler) {
    this.on('click', changeHandler, object, intermediateChangeHandler);  ///
  }

  offChange(changeHandler, object) {
    this.off('click', changeHandler, object);  ///
  }

  isChecked() {
    const domElement = this.getDOMElement(),
          checked = domElement.checked;

    return checked;
  }

  parentContext() {
    const isHideNullifiedNodesCheckboxChecked = this.isChecked.bind(this); ///

    return ({
      isHideNullifiedNodesCheckboxChecked
    });
  }

  static fromProperties(properties) {
    const { onChange } = properties,
          changeHandler = onChange, ///
          hideNullifiedNodesCheckbox = Element.fromProperties(HideNullifiedNodesCheckbox, properties, changeHandler);

    return hideNullifiedNodesCheckbox;
  }}

Object.assign(HideNullifiedNodesCheckbox, {
  tagName: 'input',
  defaultProperties: {
    type: 'checkbox',
    className: 'hide-nullified-nodes'
  },
  ignoredProperties: [
    'onChange'
  ]
});

module.exports = HideNullifiedNodesCheckbox;

function defaultIntermediateChangeHandler(changeHandler, event, targetElement) {
  const checkbox = targetElement, ///
        checked = checkbox.isChecked();

  changeHandler(checked, event, targetElement);
}
