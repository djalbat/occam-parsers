'use strict';

const Production = require('../../bnf/production');

class StatementProduction extends Production {
  static fromGrammar(grammar) {
    
  }
}

module.exports = StatementProduction;

const defaultGrammar = `



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   expression



     typeAssertion                        ::=   expression ":" typeName

     equality                             ::=   expression "=" expression

     expression                           ::=   term



`;
