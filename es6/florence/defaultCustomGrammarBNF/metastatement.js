'use strict';

const metastatementDefaultCustomGrammarBNF = `


     metastatement                        ::=   proofAssertion 
           
                                            |   contextDefinition 
           
                                            |   subproof 
                                            
                                            |   metavariable 

                                            |   nonsense 

                                            ;

      
     proofAssertion                       ::=   context "⊢" judgement ;
     
     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

     judgement                            ::=   reference "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;


`;

module.exports = metastatementDefaultCustomGrammarBNF;
