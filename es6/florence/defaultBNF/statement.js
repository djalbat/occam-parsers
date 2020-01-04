'use strict';

const statementDefaultBNF = `statement                            ::=   parenthesisedStatement

                                       |   typeAssertion 
                                                  
                                       |   equality 
                                              
                                       ;


parenthesisedStatement               ::=   "(" statement ")" ;

typeAssertion                        ::=   expression ":" typeName ;

equality                             ::=   expression "=" expression ;`;

module.exports = statementDefaultBNF;
