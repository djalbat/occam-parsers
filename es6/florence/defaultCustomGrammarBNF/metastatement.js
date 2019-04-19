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
     
     judgement                            ::=   reference "::" metavariable ;

     subproof                             ::=   supposition "..." metavariable ;

     supposition                          ::=   "[" metavariable "]" ;


`;

module.exports = metastatementDefaultCustomGrammarBNF;
