'use strict';

const metastatementDefaultCustomGrammarBNF = `


     metastatement                        ::=   contextDefinition qualification? <END_OF_LINE> 
           
                                            |   proofAssertion qualification? <END_OF_LINE>
           
                                            |   metavariable qualification? <END_OF_LINE> 

                                            |   subproof qualification? <END_OF_LINE> 
                                            
                                            |   nonsense qualification? <END_OF_LINE> 

                                            ;

      
     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

     proofAssertion                       ::=   context "⊢" judgement ;
     
     judgement                            ::=   reference "::" metavariable ;

     subproof                             ::=   supposition "..." metavariable ;

     supposition                          ::=   "[" metavariable "]" ;


`;

module.exports = metastatementDefaultCustomGrammarBNF;
