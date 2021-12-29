"use strict";

import { BasicLexer } from "occam-lexers";
import { BasicParser } from "../../index";  ///

import View from "../view";

const { bnf } = BasicParser,
      { entries } = BasicLexer;

export default class BasicView extends View {
  Lexer = class extends BasicLexer {
    static entries = entries;
  };

  Parser = class extends BasicParser {
    static bnf = bnf;
  };

  initialContent = "(1+2)/3";

  static defaultProperties = {
    className: "basic"
  };
}
