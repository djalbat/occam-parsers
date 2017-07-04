'use strict';

const metastatement = `

     proofAssertion                       ::=   context "⊢" metastatement "::" metastatement ;

     contextAssertion                     ::=   context "=" ( context | metastatement ) ( "," ( context | metastatement ) )* ;

     subproof                             ::=   supposition "..." metastatement ;

     supposition                          ::=   "[" metastatement "]" ;



     metastatement                        ::=   proofAssertion
           
                                            |   contextAssertion
           
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
                                                  
                                            |   expression
                                            
                                            ;

`;

const term = `

     term                                 ::=   compoundTerm 
     
                                            |   variable
                                            
                                            ;

`;

const defaultCustomGrammarBNFMap = {
  metastatement: metastatement,
  statement: statement,
  term: term
};

module.exports = defaultCustomGrammarBNFMap;
