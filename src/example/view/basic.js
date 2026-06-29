"use strict";

import BasicLexer from "../basic/lexer";
import BasicParser from "../basic/parser";

import View from "../view";

export default class BasicView extends View {
  static Lexer = BasicLexer;  ///

  static Parser = BasicParser;  ///

  static initialContent = `w\`p\`.`;

  static defaultProperties = {
    className: "basic"
  };
}
