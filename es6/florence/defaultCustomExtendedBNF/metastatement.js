'use strict';

const metastatementDefaultCustomExtendedBNF = `

     proofAssertion                       ::=   context "⊢" metastatement "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;



     metastatement                        ::=   proofAssertion
           
                                            |   subproof
                                            
                                            |   metavariable

                                            ;
      
`;

module.exports = metastatementDefaultCustomExtendedBNF;
