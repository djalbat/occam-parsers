'use strict';

const easy = require('easy');

const { InputElement } = easy;

class RuleNameInput extends InputElement {
  getRuleName() {
    const value = this.getValue(),
          ruleName = value;  ///

    return ruleName;
  }

  parentContext() {
    const getRuleName = this.getRuleName.bind(this);

    return ({
      getRuleName
    });
  }

  static fromProperties(properties) { return InputElement.fromProperties(RuleNameInput, properties); }
}

Object.assign(RuleNameInput, {
  tagName: 'input',
  defaultProperties: {
    type: 'text',
    className: 'rule-name',
    spellCheck: 'false'
  }
});

module.exports = RuleNameInput;
