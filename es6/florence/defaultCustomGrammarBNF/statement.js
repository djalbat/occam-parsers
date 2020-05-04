"use strict";

const statementDefaultCustomGrammarBNF = `statement                            ::=   parenthesisedStatement

                                       |   typeAssertion 
                                                  
                                       |   equality 
                                              
                                       ;


parenthesisedStatement               ::=   "(" statement ")" ;

typeAssertion                        ::=   expression ":" typeName ;

equality                             ::=   expression "=" expression ;`;

export default statementDefaultCustomGrammarBNF;
