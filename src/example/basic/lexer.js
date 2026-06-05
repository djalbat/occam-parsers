"use strict";

import { CommonLexer, BasicLexer as BasicLexerBase } from "occam-lexers";

import entries from "./entries";

export default class BasicLexer extends BasicLexerBase {
  static entries = entries;

  static fromNothing() { return CommonLexer.fromNothing(BasicLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(BasicLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(BasicLexer, entries); }
}
