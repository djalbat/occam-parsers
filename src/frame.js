"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class Frame {
  constructor(childNodes, precedence) {
    this.childNodes = childNodes;
    this.precedence = precedence;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
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

  merge(frame) {
    let childNodes,
        precedence;

    childNodes = frame.getChildNodes();

    precedence = frame.getPrecedence();

    childNodes = [  ///
      ...this.childNodes,
      ...childNodes
    ];

    precedence = precedence || this.precedence; ///

    frame = new Frame(childNodes, precedence);

    return frame;
  }

  static fromNothing() {
    const childNodes = [],
          precedence = null,
          frame = new Frame(childNodes, precedence);

    return frame;
  }

  static fromChildNode(childNode) {
    const childNodes = [
            childNode
          ],
          precedence = null,
          frame = new Frame(childNodes, precedence);

    return frame;
  }

  static fromChildNodesAndPrecedence(childNodes, precedence) {
    const frame = new Frame(childNodes, precedence);

    return frame;
  }
}

export const emptyFrame = Frame.fromNothing();
