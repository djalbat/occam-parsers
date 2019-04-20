'use strict';

const lexers = require('occam-lexers');

const Definition = require('../definition'),
      SignificantTokenTypePart = require('../part/terminal/significantTokenType');

const { types } = lexers,
      { nameType } = types;

class NameDefinition extends Definition {
  constructor() {
    const noWhitespace = false,
          nameSignificantTokenType = nameType,  ///
          nameSignificantTokenTypePart = new SignificantTokenTypePart(nameSignificantTokenType, noWhitespace),
          parts = [
            nameSignificantTokenTypePart
          ];

    super(parts)
  }
}

module.exports = NameDefinition;
