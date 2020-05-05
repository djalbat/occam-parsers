"use strict";

export const termBNF = `term                                 ::=   [custom] parenthesisedTerms? 
     
                                       |   name
                                 
                                       ;`;

export const expressionBNF = `expression                           ::=   term ;`;

export const statementBNF = `statement                            ::=   parenthesisedStatement

                                       |   typeAssertion 
                                                  
                                       |   equality 
                                              
                                       ;


parenthesisedStatement               ::=   "(" statement ")" ;

typeAssertion                        ::=   expression ":" typeName ;

equality                             ::=   expression "=" expression ;`;

export const metastatementBNF = `metastatement                        ::=   parenthesisedMetastatement

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

export default {
  termBNF,
  expressionBNF,
  statementBNF,
  metastatementBNF
};
