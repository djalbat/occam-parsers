'use strict';

const metastatementDefaultCustomGrammar = `

     metastatement                        ::=   proofAssertion
           
                                            |   subproof
                                            
                                            |   metavariable

                                            |   qualifiedMetavariable 
                                             
                                            ;
      
      
      
     proofAssertion                       ::=   context "⊢" metastatement "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;

`;

module.exports = metastatementDefaultCustomGrammar;
