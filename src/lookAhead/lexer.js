"use strict";

import { CommonLexer, WhitespaceToken, EndOfLineNonSignificantToken } from "occam-lexers";

import entries from "./entries";

export default class LookAheadLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static RegularExpressionToken = null;

  static SingleLineCommentToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing() { return CommonLexer.fromNothing(LookAheadLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(LookAheadLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(LookAheadLexer, entries); }
}
