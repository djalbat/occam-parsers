"use strict";

import { CommonLexer, BasicLexer as BasicLexerBase } from "occam-lexers";

export default class BasicLexer extends BasicLexerBase {
  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(BasicLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}
