"use strict";

import LookAheadLexer from "../../lookAhead/lexer";
import LookAheadParser from "../../lookAhead/parser";

import View from "../view";

const { bnf } = LookAheadParser,
      { entries } = LookAheadLexer;

export default class LookAheadView extends View {
  Lexer = class extends LookAheadLexer {
    static entries = entries;
  };

  Parser = class extends LookAheadParser {
    static bnf = bnf;
  };

  initialContent = "a b b c";

  static defaultProperties = {
    className: "lookAhead"
  };
}
