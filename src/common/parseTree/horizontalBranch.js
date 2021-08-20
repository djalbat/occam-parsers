"use strict";

import ParseTree from "../parseTree";

import { DASH, EMPTY_STRING } from "../../constants";

export default class HorizontalBranchParseTree extends ParseTree {
  static fromWidth(width) {
    const string = stringFromCharactersWidth(width, DASH),
          line = string, ///
          lines = [line],
          horizontalBranchParseTree = new HorizontalBranchParseTree(lines);

    return horizontalBranchParseTree;
  }
}

function stringFromCharactersWidth(charactersWidth, character) {
  let string = EMPTY_STRING;

  for (let index = 0; index < charactersWidth; index++) {
    string += character;
  }

  return string;
}
