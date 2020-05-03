"use strict";

const lexers = require("occam-lexers");

const Definition = require("../definition"),
      SignificantTokenTypePart = require("../part/terminal/significantTokenType");

const { types } = lexers,
      { nameType } = types;

class NameDefinition extends Definition {
  constructor() {
    const nameSignificantTokenType = nameType,  ///
          nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType),
          parts = [
            nameSignificantTokenTypePart
          ];

    super(parts)
  }
}

module.exports = NameDefinition;
