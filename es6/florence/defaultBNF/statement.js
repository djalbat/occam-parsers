"use strict";

const statementDefaultBNF = `statement                            ::=   parenthesisedStatement

                                       |   typeAssertion 
                                                  
                                       |   equality 
                                              
                                       ;


parenthesisedStatement               ::=   "(" statement ")" ;

typeAssertion                        ::=   expression ":" typeName ;

equality                             ::=   expression "=" expression ;`;

export default statementDefaultBNF;
