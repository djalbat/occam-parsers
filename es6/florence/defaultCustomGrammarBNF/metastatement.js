"use strict";

const metastatementDefaultCustomGrammarBNF = `metastatement                        ::=   parenthesisedMetastatement

                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable 

                                       |   subproof 
                                        
                                       ;

parenthesisedMetastatement           ::=   "(" metastatement ")" ;
  
contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "|-" judgement ;
 
judgement                            ::=   reference "::" metastatement ;

subproof                             ::=   supposition "..." metastatement ;

supposition                          ::=   "[" metastatement "]" ;`;

export default metastatementDefaultCustomGrammarBNF;
