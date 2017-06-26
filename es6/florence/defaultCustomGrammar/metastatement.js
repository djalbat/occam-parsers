'use strict';

const metastatementDefaultCustomGrammar = `

     proofAssertion                       ::=   context "⊢" metastatement "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;



     metastatement                        ::=   proofAssertion
           
                                            |   subproof
                                            
                                            |   metavariable

                                            |   qualifiedMetavariable 
                                             
                                            ;
      
`;

module.exports = metastatementDefaultCustomGrammar;
