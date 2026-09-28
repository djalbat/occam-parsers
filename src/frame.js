"use strict";

import { arrayUtilities } from "necessary";

const { first } = arrayUtilities;

export default class Frame {
  constructor(childNodes, precedence, nullified, aborted) {
    this.childNodes = childNodes;
    this.precedence = precedence;
    this.nullified = nullified;
    this.aborted = aborted;
  }

  getChildNodes() {
    return this.childNodes;
  }

  getPrecedence() {
    return this.precedence;
  }

  isNullified() {
    return this.nullified;
  }

  isAborted() {
    return this.aborted;
  }

  setChildNodes(childNodes) {
    this.childNodes = childNodes;
  }

  setPrecedence(precedence) {
    this.precedence = precedence;
  }

  setNullified(nullified) {
    this.nullified = nullified;
  }

  setAborted(aborted) {
    this.aborted = aborted;
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

  isValid() {
    const valid = !this.nullified && !this.aborted;

    return valid;
  }

  isInvalid() {
    const invalid = this.nullified || this.aborted;

    return invalid;
  }

  merge(frame) {
    if (this.nullified || this.aborted) {
      debugger
    }

    let childNodes,
        precedence;

    childNodes = frame.getChildNodes();

    precedence = frame.getPrecedence();

    childNodes = [  ///
      ...this.childNodes,
      ...childNodes
    ];

    precedence = precedence || this.precedence; ///

    const nullified = false,
          aborted = false;

    frame = new Frame(childNodes, precedence, nullified, aborted);

    return frame;
  }

  static fromNothing() {
    const childNodes = [],
          precedence = null,
          nullified = false,
          aborted = false,
          frame = new Frame(childNodes, precedence, nullified, aborted);

    return frame;
  }

  static fromChildNode(childNode) {
    const childNodes = [
            childNode
          ],
          precedence = null,
          nullified = false,
          aborted = false,
          frame = new Frame(childNodes, precedence, nullified, aborted);

    return frame;
  }

  static fromChildNodesAndPrecedence(childNodes, precedence) {
    const nullified = false,
          aborted = false,
          frame = new Frame(childNodes, precedence, nullified, aborted);

    return frame;
  }
}

export const emptyFrame = Frame.fromNothing();

export const abortedFrame = Frame.fromNothing();

export const nullifiedFrame = Frame.fromNothing();

const aborted = true,
      nullified = true;

abortedFrame.setAborted(aborted);

nullifiedFrame.setNullified(nullified);
