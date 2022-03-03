"use strict";

import { characters } from "necessary";

import ParseTree from "../parseTree";

import { EMPTY_STRING } from "../constants";

const { BAR_CHARACTER } = characters;

export default class VerticalBranchParseTree extends ParseTree {
  constructor(lines, verticalBranchPosition) {
    super(lines);
    
    this.verticalBranchPosition = verticalBranchPosition;
  }
  
  getVerticalBranchPosition() {
    return this.verticalBranchPosition;
  }

  addLeftMargin(leftMarginWidth) {
    super.addLeftMargin(leftMarginWidth);

    this.verticalBranchPosition += leftMarginWidth; ///
  }

  static fromWidth(width) {
    const string = BAR_CHARACTER,
          verticalBranchPosition = 0,
          verticalBranchParseTree = VerticalBranchParseTree.fromStringAndVerticalBranchPosition(VerticalBranchParseTree, string, verticalBranchPosition),
          leftMarginWidth = Math.floor(width/2),
          rightMarginWidth = width - leftMarginWidth - 1;

    verticalBranchParseTree.addLeftMargin(leftMarginWidth);
    verticalBranchParseTree.addRightMargin(rightMarginWidth);

    return verticalBranchParseTree;
  }

  static fromDepthAndVerticalBranchPosition(Class, depth, verticalBranchPosition) {
    const lines = linesFromDepth(depth),
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args));  ///

    return verticalBranchParseTree;
  }

  static fromStringAndVerticalBranchPosition(Class, string, verticalBranchPosition) {
    if (verticalBranchPosition === undefined) {
      verticalBranchPosition = string;  ///
      string = Class; ///
      Class = ParseTree;  ///
    }
    
    const line = string, ///
          lines = [line],
          args = [null, lines, verticalBranchPosition],
          verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args));  ///

    return verticalBranchParseTree;
  }
}

function linesFromDepth(depth) {
  const lines = [];

  let index = 0;

  while (index < depth) {
    lines[index++] = EMPTY_STRING;
  }

  return lines;
}
