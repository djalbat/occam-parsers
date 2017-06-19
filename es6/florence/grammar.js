'use strict';

const grammar = `


     document                                   ::=   header? verticalSpace? body?



     header                                     ::=   includeDirective+

     body                                       ::=   part+

     verticalSpace                              ::=   <END_OF_LINE>+



     includeDirective                           ::=   "include"<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE>



     part                                       ::=   verticalSpace

                                                  |   rule
                                                                
                                                  |   axiom
                                                                
                                                  |   lemma
                                                                
                                                  |   theorem
                                                                
                                                  |   "Type" type

                                                  |   "Types" types

                                                  |   "Variable" variable

                                                  |   "Variables" variables

                                                  |   "Constructor" constructor

                                                  |   "Constructors" constructors

                                                  |   "Abbreviation" abbreviation

                                                  |   "Abbreviations" abbreviations

                                                  |   "DependentType" dependentType

                                                  |   "DependentTypes" dependentTypes

                                                  |   "Metavariable" metavariable

                                                  |   "Metavariables" metavariables

                                                  |   "QualifiedMetavariable" qualifiedMetavariable

                                                  |   "QualifiedMetavariables" qualifiedMetavariables
                                                                
                                                  |   error
                                                                     
                                                                                                                                          
                                                                     
     rule                                       ::=   "Rule" parenthesisedLabels? <END_OF_LINE> ( premise | premises )? conclusion metaProof?

     axiom                                      ::=   "Axiom" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) 

     lemma                                      ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) proof?

     theorem                                    ::=   "Theorem" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) proof?



     types                                      ::=   type(<NO_WHITESPACE>","<NO_WHITESPACE>type)+

     variables                                  ::=   variable(<NO_WHITESPACE>","<NO_WHITESPACE>variable)+
   
     constructors                               ::=   constructor(<NO_WHITESPACE>","<NO_WHITESPACE>constructor)+
   
     abbreviations                              ::=   abbreviation(<NO_WHITESPACE>","<NO_WHITESPACE>abbreviation)+
   
     dependentTypes                             ::=   dependentType(<NO_WHITESPACE>","<NO_WHITESPACE>dependentType)*
   
     metavariables                              ::=   metavariable(<NO_WHITESPACE>","<NO_WHITESPACE>metavariable)*
   
     qualifiedMetavariables                     ::=   qualifiedMetavariable(<NO_WHITESPACE>","<NO_WHITESPACE>qualifiedMetavariable)*
   


     type                                       ::=   typeName
   
     variable                                   ::=   variableName(<NO_WHITESPACE>":"typeName)?
   
     constructor                                ::=   constructorName<NO_WHITESPACE>parenthesisedTypes?<NO_WHITESPACE>":"<NO_WHITESPACE>typeName
   
     abbreviation                               ::=   typeName "for" typeName | constructorName "for" constructorName

     dependentType                              ::=   dependentTypeName<NO_WHITESPACE>"("<NO_WHITESPACE>type<NO_WHITESPACE>")"
   
     metavariable                               ::=   metavariableName

     qualifiedMetavariable                      ::=   qualifiedMetavariableName
   
   
   
     error                                      ::=   .
     
     
     
     premise                                    ::=   "Premise" <END_OF_LINE> unjustifiedMetaStatement

     premises                                   ::=   "Premises" <END_OF_LINE> unjustifiedMetaStatement unjustifiedMetaStatement+

     conclusion                                 ::=   "Conclusion" <END_OF_LINE> unjustifiedMetaStatementOrJustifiedMetaStatement
     
     metaProof                                  ::=   "Proof" <END_OF_LINE> ( metaProofDerivation | abridgedMetaProofDerivation )



     proof                                      ::=   "Proof" <END_OF_LINE> ( proofDerivation | abridgedProofDerivation )

     abridgedProofDerivation                    ::=   unjustifiedStatementOrJustifiedStatement

     proofDerivation                            ::=   derivation therefore

     derivation                                 ::=   subDerivation+

     therefore                                  ::=   "Therefore" <END_OF_LINE> unjustifiedStatementOrJustifiedStatement

     subDerivation                              ::=   subLemma | unjustifiedStatementOrJustifiedStatement



     indicativeConditional                      ::=   suppose hence unjustifiedStatementOrJustifiedStatement?

     subLemma                                   ::=   suppose then? hence unjustifiedStatementOrJustifiedStatement? verticalSpace?

     suppose                                    ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+

     then                                       ::=   "Then" <END_OF_LINE> derivation

     hence                                      ::=   "Hence" <END_OF_LINE> unjustifiedStatementOrJustifiedStatement



     unjustifiedStatementOrJustifiedStatement   ::=   unjustifiedStatement | justifiedStatement

     unjustifiedStatement                       ::=   statement <END_OF_LINE>

     justifiedStatement                         ::=   statement ( "by" | "from" ) reference <END_OF_LINE>

     reference                                  ::=   referenceName<NO_WHITESPACE>parenthesisedTerms?



     statement                                  ::=   proofAssertion 
     
                                                  |   typeAssertion 
                                                  
                                                  |   equality 
                                                  
                                                  |   expression



     proofAssertion                             ::=   context "⊢" ( qualifiedMetavariable | metavariable ) "::" ( qualifiedMetavariable | metavariable )

     typeAssertion                              ::=   expression ":" typeName

     equality                                   ::=   expression "=" expression

     expression                                 ::=   term



     context                                    ::=   contextName<NO_WHITESPACE>parenthesisedTerms?



     qualifiedMetavariable                      ::=   qualifiedMetavariableName<NO_WHITESPACE>parenthesisedTerms?
     
     
     
     parenthesisedLabels                        ::=   "("<NO_WHITESPACE>labels<NO_WHITESPACE>")"                         

     parenthesisedTypes                         ::=   "("<NO_WHITESPACE>typeNames<NO_WHITESPACE>")"

     parenthesisedTerms                         ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")"     



     labels                                     ::=   label(<NO_WHITESPACE>","<NO_WHITESPACE>label)*

     terms                                      ::=   term(<NO_WHITESPACE>","<NO_WHITESPACE>term)*
     


     label                                      ::=   labelName<NO_WHITESPACE>parenthesisedTerms?
     
          
     
     term                                       ::=   compoundTerm | variableName

     compoundTerm                               ::=   constructorName<NO_WHITESPACE>parenthesisedTerms?



     referenceName                              ::=   name

     contextName                                ::=   name

     typeName                                   ::=   name

     variableName                               ::=   name

     constructorName                            ::=   name

     dependentTypeName                          ::=   name

     metavariableName                           ::=   name

     qualifiedMetavariableName                  ::=   name
   
     labelName                                  ::=   name

     name                                       ::=   [unassigned]
       
`;

module.exports = grammar;
