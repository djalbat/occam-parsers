"use strict";

import { arrayUtilities } from "necessary";
import { ISOLATED_PRECEDENCE } from "./constants";

const { first } = arrayUtilities;

export default class Frame {
  constructor(childNodes, precedence) {
    this.childNodes = childNodes;
    this.precedence = precedence;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getPrecedence(definition = null) {
    let precedence;

    if (definition === null) {
      precedence = this.precedence;
    } else {
      const isolated = this.isIsolated();

      if (isolated) {
        precedence = null;
      } else {
        precedence = (this.precedence !== null) ?
                        this.precedence :
                          definition.getPrecedence();
      }
    }

    return precedence;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  isIsolated() {
    const isolated = (this.precedence === ISOLATED_PRECEDENCE);

    return isolated;
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