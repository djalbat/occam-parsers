"use strict";

import { MetaJSONLexer } from "occam-lexers";
import { MetaJSONParser } from "../../index"; ///

import View from "../view";

export default class MetaJSONView extends View {
  Lexer = MetaJSONLexer;

  Parser = MetaJSONParser;

  heading = "Meta JSON parser example";

  initialContent = `{}`;

  static defaultProperties = {
    className: "meta-json"
  };
}
