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

     term                                 ::=   compoundTerm 
     
                                            |   variable
                                            
                                            ;

`;

const customGrammarsDefaultBNFMap = {
  metastatement: metastatement,
  statement: statement,
  term: term
};

module.exports = customGrammarsDefaultBNFMap;
