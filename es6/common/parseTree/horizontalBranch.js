"use strict";

import ParseTree from "../parseTree";

class HorizontalBranchParseTree extends ParseTree {
  static fromWidth(width) {
    const string = stringFromCharactersWidth(width, "-"),
          line = string, ///
          lines = [line],
          horizontalBranchParseTree = new HorizontalBranchParseTree(lines);

    return horizontalBranchParseTree;
  }
}

module.exports = HorizontalBranchParseTree;

function stringFromCharactersWidth(charactersWidth, character) {
  let string = "";

  for (let index = 0; index < charactersWidth; index++) {
    string += character;
  }

  return string;
}
