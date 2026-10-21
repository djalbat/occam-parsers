"use strict";

import { arrayUtilities } from "necessary";
import { isolatedPrecedence } from "./precedence";

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
    const isolated = (this.precedence === isolatedPrecedence);

    return isolated;
  }

  isSingular() {
    const childNodesLength = this.childNodes.length,
          singular = (childNodesLength === 1);

    return singular;
  }

  isEmpty() {
    const childNodesLength = this.childNodes.length,
          empty = (childNodesLength === 0);

    return empty;
  }

  getNode() {
    let node = null;

    const singluar = this.isSingular();

    if (singluar) {
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