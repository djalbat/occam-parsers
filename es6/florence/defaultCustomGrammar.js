"use strict";

export const termBNF = `term                                 ::=   name 
                                 
                                       ;
                                       
                                       `;

export const expressionBNF = `expression                           ::=   "(" expression ")"

                                       |   term 
                                       
                                       ;
                                       
                                       `;

export const statementBNF = `statement                            ::=   "(" statement ")"

                                       |   expression 
                                                  
                                       ;

                                       `;

export const metastatementBNF = `metastatement                        ::=   "(" metastatement ")"

                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   typeAssertion 
                                                  
                                       |   metavariable 

                                       |   subproof 
                                        
                                       ;

contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

proofAssertion                       ::=   context "|-" judgement ;
 
typeAssertion                        ::=   ( type | expression ) ":" typeName 

judgement                            ::=   reference "::" metastatement ;

subproof                             ::=   supposition "..." metastatement ;

supposition                          ::=   "[" metastatement "]" ;

                                       `;

export default {
  termBNF,
  expressionBNF,
  statementBNF,
  metastatementBNF
};
