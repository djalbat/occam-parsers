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

  getPrecedence() {
    return this.precedence;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
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

  isIsolated() {
    let isolated = false;

    if (this.precedence !== null) {
      isolated = this.precedence.isIsolated();
    }

    return isolated;
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

  isolate() {
    const childNodes = [
            ...this.childNodes,
          ],
          precedence = (this.precedence !== null) ?
                         this.precedence.isolate() :
                           isolatedPrecedence,
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