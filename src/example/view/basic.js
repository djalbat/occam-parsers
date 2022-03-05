"use strict";

import { BasicLexer } from "occam-lexers/src";
import { BasicParser } from "../../index";  ///

import View from "../view";

const { bnf } = BasicParser,
      { entries } = BasicLexer;

export default class BasicView extends View {
  static Lexer = class extends BasicLexer {
    static entries = entries;
  };

  static Parser = class extends BasicParser {
    static bnf = bnf;
  };

  static initialContent = "(1+2)/3";

  static defaultProperties = {
    className: "basic"
  };
}
