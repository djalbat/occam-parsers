"use strict";

import { FlorenceLexer } from "occam-lexers";

import View from "../view";
import FlorenceParser from "../../florence/parser";

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
