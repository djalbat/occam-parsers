'use strict';

const statementDefaultCustomGrammar = `

     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;

     expression                           ::=   term ;



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   expression
                                            
                                            ;

`;

module.exports = statementDefaultCustomGrammar;
