"use strict";

import { MetaJSONLexer } from "occam-lexers";

import View from "../view";
import MetaJSONParser from "../../metaJSON/parser";

export default class MetaJSONView extends View {
  Lexer = MetaJSONLexer;

  Parser = MetaJSONParser;

  heading = "MetaJSON parser example";

  initialContent = `{
  "repository": "https://github.com/jecs-imperial/material-conditional",
  "dependencies": [
    "classical-propositional-logic",
    "de-morgans-laws"
  ]
}
`;

  static defaultProperties = {
    className: "metaJSON"
  };
}
