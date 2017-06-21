'use strict';

const metastatementDefaultCustomGrammar = `



     metastatement                        ::=   proofAssertion
           
                                            |   qualifiedMetavariable 
                                            
                                            |   metavariable 
      
      
      
     proofAssertion                       ::=   context "⊢" metastatement "::" metastatement



     qualifiedMetavariable                ::=   qualifiedMetavariableName<NO_WHITESPACE>parenthesisedTerms
     
     metavariable                         ::=   metavariableName

     

`;

module.exports = metastatementDefaultCustomGrammar;
