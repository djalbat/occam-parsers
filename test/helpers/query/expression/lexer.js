"use strict";

const { CommonLexer, WhitespaceToken, EndOfLineSignificantToken } = require("occam-lexers");

const entries = require("./entries");

class ExpressionLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null;

  static SingleLineCommentToken = null;

  static RegularExpressionToken = null;

  static EndOfMultiLineCommentToken = null;

  static StartOfMultiLineCommentToken = null;

  static MiddleOfMultiLineCommentToken = null;

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = null;

  static fromNothing() { return CommonLexer.fromNothing(ExpressionLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(ExpressionLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(ExpressionLexer, entries); }
}

module.exports = ExpressionLexer;
