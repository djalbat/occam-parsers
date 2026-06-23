"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

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

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  getNode() {
    let node = null;

    const childNodesLength = this.childNodes.length;

    if (childNodesLength === 1) {
      const firstChildNode = first(this.childNodes);

      node = firstChildNode;  ///
    }

    return node;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  addChildNodes(childNodes, continuing) {
    continuing ?
      this.childNodes.unshift(...childNodes) :
        this.childNodes.push(...childNodes);
  }

  merge(frame, continuing = false) {
    const precedence = frame.getPrecedence(),
          childNodes = frame.getChildNodes();

    frame = this.clone();

    frame.setPrecedence(precedence);

    frame.addChildNodes(childNodes, continuing);

    return frame;
  }

  clone() {
    const precedence = this.precedence,
          childNodes = [
            ...this.childNodes,
          ],
          frame = new Frame(precedence, childNodes);

    return frame;
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

  static fromNothing() {
    const precedence = null,
          childNodes = [],
          frame = new Frame(precedence, childNodes);

    return frame;
  }

  static fromChildNode(childNode) {
    const precedence = null,
          childNodes = [
            childNode
          ],
          frame = new Frame(precedence, childNodes);

    return frame;
  }

  static fromPrecedenceAndChildNodes(precedence, childNodes) {
    const frame = new Frame(precedence, childNodes);

    return frame;
  }
}

export const emptyFrame = Frame.fromNothing();
