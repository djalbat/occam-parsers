'use strict';

const metastatement = `

     proofAssertion                       ::=   context "⊢" judgement ;
     
     contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;

     judgement                            ::=   reference "::" metastatement ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;



     metastatement                        ::=   proofAssertion
           
                                            |   contextDefinition
           
                                            |   subproof
                                            
                                            |   metavariable

                                            ;
      
`;

const statement = `

     typeAssertion                        ::=   expression ":" typeName ;

     equality                             ::=   expression "=" expression ;

     expression                           ::=   term ;



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   metastatement
     
                                            ;

`;

const term = `

     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms? ;



     term                                 ::=   compoundTerm 
     
                                            |   name
                                            
                                            ;

`;

const customGrammarsDefaultBNFMap = {
  metastatement: metastatement,
  statement: statement,
  term: term
};

module.exports = customGrammarsDefaultBNFMap;
