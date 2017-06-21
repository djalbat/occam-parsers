'use strict';

const Production = require('../../bnf/production');

class TermProduction extends Production {
  static fromGrammar(grammar) {
    
  }
}

module.exports = TermProduction;

const defaultGrammar = `


     term                                 ::=   compoundTerm 
     
                                            |   variable



     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms?



     variable                             ::=   variableName
     
     

`;