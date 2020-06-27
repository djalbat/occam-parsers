"use strict";

export const termBNF = `term                                 ::=   name 
                                 
                                       ;`;

export const expressionBNF = `expression                           ::=   "(" expression ")"

                                       |   term ;`;

export const statementBNF = `statement                            ::=   "(" statement ")"

                                       |   typeAssertion 
                                                  
                                       |   equality 
                                              
                                       ;


typeAssertion                        ::=   expression ":" typeName ;

equality                             ::=   expression "=" expression ;`;

export const metastatementBNF = `metastatement                        ::=   "(" metastatement ")"

                                       |   contextDefinition 
           
                                       |   proofAssertion
       
                                       |   metavariable 

                                       |   subproof 
                                        
                                       ;

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
