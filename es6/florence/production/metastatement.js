'use strict';

const Production = require('../../bnf/production');

class MetastatementProduction extends Production {
  static fromGrammar(grammar) {
    
  }
}

module.exports = MetastatementProduction;

const defaultGrammar = `



     metastatement                        ::=   proofAssertion
           
                                            |   qualifiedMetavariable 
                                            
                                            |   metavariable 
      
      
      
     proofAssertion                       ::=   context "⊢" metastatement "::" metastatement



     qualifiedMetavariable                ::=   qualifiedMetavariableName<NO_WHITESPACE>parenthesisedTerms
     
     metavariable                         ::=   metavariableName

     

`;
