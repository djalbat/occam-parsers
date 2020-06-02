"use strict";

import { FlorenceLexer } from "occam-lexers";
import { FlorenceParser } from "../../index"; ///

import View from "../view";

export default class FlorenceView extends View {
  Lexer = FlorenceLexer;

  Parser = FlorenceParser;

  heading = "Florence parser example";

  initialContent = `
  
Rule (Explosion)
  Conclusion
    A

  `;

  static defaultProperties = {
    className: "florence"
  };
}
