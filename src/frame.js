"use strict";

export default class Frame {
  constructor(precedence, childNodes) {
    this.precedence = precedence;
    this.childNodes = childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  getChildNodes() {
    return this.childNodes;
  }

  apply(context) {
    const parsed = context.update(this.precedence, this.childNodes);

    return parsed;
  }

  serialise() {
    let value;

    const precedence = this.precedence,
          childNodes = this.childNodes;

    value = {
      precedence,
      childNodes
    };

    return value;
  }

  static unserialise(value) {
    const { precedence, childNodes } = value;

    const frame = new Frame(precedence, childNodes);

    return frame;
  }

  static fromPrecedenceAndChildNodes(precedence, childNodes) {
    const frame = new Frame(precedence, childNodes);

    return frame;
  }
}
