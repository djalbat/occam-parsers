'use strict';

const statementDefaultBNF = `statement                           ::=   typeAssertion 
                                                  
                                       |   equality 
                                              
                                       ;


typeAssertion                        ::=   expression ":" typeName ;

equality                             ::=   expression "=" expression ;`;

module.exports = statementDefaultBNF;
