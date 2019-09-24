'use strict';

const lexers = require('occam-lexers');

const TerminalPart = require('../../part/terminal'),
      TerminalNode = require('../../../common/node/terminal');

const { specialSymbols } = lexers,
      { NO_WHITESPACE } = specialSymbols;

class TerminalSymbolPart extends TerminalPart {
  constructor(content, noWhitespace) {
    super(noWhitespace);
    
    this.content = content;
  }

  parse(configuration) {
    let terminalNode = null;
    
    const savedIndex = configuration.getSavedIndex(),
		      noWhitespace = this.hasNoWhitespace(),
					nextSignificantToken = configuration.getNextSignificantToken(noWhitespace),
					significantToken = nextSignificantToken; ///

    if (significantToken !== null) {
      const content = significantToken.getContent(),
            parsed = (content === this.content);

      if (parsed) {
        terminalNode = TerminalNode.fromSignificantToken(significantToken);
      }
    }

    if (terminalNode === null) {
      configuration.backtrack(savedIndex);
    }

    return terminalNode;
  }
  
  asString() {
    const noWhitespace = this.hasNoWhitespace(),
		      noWhitespaceString = noWhitespace ?
                                 NO_WHITESPACE :
                                   '',
          string = `${noWhitespaceString}"${this.content}"`;
    
    return string;
  }

  clone() { return super.clone(TerminalSymbolPart, this.content); }
}

module.exports = TerminalSymbolPart;
