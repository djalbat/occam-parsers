"use strict";

import { characters } from "necessary";

import ParseTree from "../parseTree";

import { EMPTY_STRING } from "../../constants";

const { DASH_CHARACTER } = characters;

export default class HorizontalBranchParseTree extends ParseTree {
  static fromWidth(width) {
    const string = stringFromCharactersWidth(width, DASH_CHARACTER),
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
