'use strict';

const metastatementDefaultCustomGrammarBNF = `


     metastatement                        ::=   contextDefinition 
           
                                            |   proofAssertion
           
                                            |   metavariable 

                                            |   subproof 
                                            
                                            |   nonsense 

                                            ;

      
     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

     proofAssertion                       ::=   context "⊢" judgement ;
     
     judgement                            ::=   reference "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;


`;

module.exports = metastatementDefaultCustomGrammarBNF;
