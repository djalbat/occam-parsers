'use strict';

const metastatementDefaultCustomGrammar = `

     proofAssertion                       ::=   context "⊢" metastatement "::" metastatement ;

     derivation                           ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;



     metastatement                        ::=   proofAssertion
           
                                            |   derivation
                                            
                                            |   metavariable

                                            |   qualifiedMetavariable 
                                             
                                            ;
      
`;

module.exports = metastatementDefaultCustomGrammar;
