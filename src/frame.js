"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class Frame {
  constructor(childNodes) {
    this.childNodes = childNodes;
  }

  getChildNodes() {
    return this.childNodes;
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
    let childNodes;

    childNodes = frame.getChildNodes();

    childNodes = [  ///
      ...this.childNodes,
      ...childNodes
    ];

    frame = new Frame(childNodes);

    return frame;
  }

  static fromNothing() {
    const childNodes = [],
          frame = new Frame(childNodes);

    return frame;
  }

  static fromChildNode(childNode) {
    const childNodes = [
            childNode
          ],
          frame = new Frame(childNodes);

    return frame;
  }
}

export const emptyFrame = Frame.fromNothing();
