'use strict';

const grammar = `

     document                                   ::=   header? verticalSpace? body?



     header                                     ::=   includeDirective+

     body                                       ::=   part+

     verticalSpace                              ::=   <END_OF_LINE>+



     part                                       ::=   verticalSpace

                                                  |   typeDefinition
                                                                
                                                  |   typesDefinition
                                                                
                                                  |   variableDeclaration
                                                                
                                                  |   variablesDeclaration
                                                                
                                                  |   constructorDefinition
                                                                
                                                  |   constructorsDefinition
                                                                
                                                  |   metavariableDeclaration
                                                                
                                                  |   metavariablesDeclaration
                                                                
                                                  |   dependentTypeDefinition
                                                                
                                                  |   dependentTypesDefinition
                                                                
                                                  |   qualifiedMetavariableDeclaration
                                                                
                                                  |   qualifiedMetavariablesDeclaration
                                                                
                                                  |   rule
                                                                
                                                  |   axiom
                                                                
                                                  |   lemma
                                                                
                                                  |   theorem
                                                                
                                                  |   error
                                                                     
                                                                                                                                          
                                                                     
     includeDirective                           ::=   "include"<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE>



     typeDefinition                             ::=   "Type" type

     typesDefinition                            ::=   "Types" types

     variableDeclaration                        ::=   "Variable" variable

     variablesDeclaration                       ::=   "Variables" variables

     dependentTypeDefinition                    ::=   "DependentType" dependentType

     dependentTypesDefinition                   ::=   "DependentTypes" dependentTypes

     constructorDefinition                      ::=   "Constructor" constructor

     constructorsDefinition                     ::=   "Constructors" constructors<NO_WHITESPACE>(";"constructors)*

     metaVariableDeclaration                    ::=   "MetaVariable" metaVariable

     metaVariablesDeclaration                   ::=   "MetaVariables" metaVariables

     qualifiedMetaVariableDeclaration           ::=   "QualifiedMetaVariable" qualifiedMetaVariable

     qualifiedMetaVariablesDeclaration          ::=   "QualifiedMetaVariables" qualifiedMetaVariables
     
     
     
     type                                       ::=   typeName
   
     types                                      ::=   typeNames   

     variable                                   ::=   variableName(<NO_WHITESPACE>":"typeName)?
   
     variables                                  ::=   variable(<NO_WHITESPACE>","<NO_WHITESPACE>variable)+
   
     constructor                                ::=   constructorName<NO_WHITESPACE>parenthesisedTypeNames?<NO_WHITESPACE>":"<NO_WHITESPACE>typeName
   
     constructors                               ::=   constructor(<NO_WHITESPACE>","<NO_WHITESPACE>constructor)+
   
     dependentType                              ::=   dependentTypeName<NO_WHITESPACE>"("<NO_WHITESPACE>typeName<NO_WHITESPACE>")"
   
     dependentTypes                             ::=   dependentType(<NO_WHITESPACE>","<NO_WHITESPACE>dependentType)*
   
     metaVariable                               ::=   metaVariableName

     metaVariables                              ::=   metaVariable(<NO_WHITESPACE>","<NO_WHITESPACE>metaVariable)*
   
     qualifiedMetaVariable                      ::=   qualifiedMetaVariableName
   
     qualifiedMetaVariables                     ::=   qualifiedMetaVariable(<NO_WHITESPACE>","<NO_WHITESPACE>qualifiedMetaVariable)*
   
   
   
     rule                                       ::=   "Rule" parenthesisedLabels? <END_OF_LINE> ( premise | premises )? conclusion proof?

     axiom                                      ::=   "Axiom" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | argument ) 

     lemma                                      ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | argument ) proof?

     theorem                                    ::=   "Theorem" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | argument ) proof?



     error                                      ::=   .
     
     
     
     premise                                    ::=   "Premise" <END_OF_LINE> unjustifiedStatement

     premises                                   ::=   "Premises" <END_OF_LINE> unjustifiedStatement unjustifiedStatement+

     conclusion                                 ::=   "Conclusion" <END_OF_LINE> unjustifiedStatementOrJustifiedStatement



     proof                                      ::=   "Proof" <END_OF_LINE> ( proofDerivation | abridgedProofDerivation )

     abridgedProofDerivation                    ::=   unjustifiedStatementOrJustifiedStatement

     proofDerivation                            ::=   derivation therefore

     derivation                                 ::=   subDerivation+

     therefore                                  ::=   "Therefore" <END_OF_LINE> unjustifiedStatementOrJustifiedStatement

     subDerivation                              ::=   subLemma | unjustifiedStatementOrJustifiedStatement



     argument                                   ::=   suppose hence unjustifiedStatementOrJustifiedStatement?

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



     proofAssertion                             ::=   ( metaVariable | qualifiedMetaVariable ) "::" ( metaVariable | qualifiedMetaVariable )

     typeAssertion                              ::=   expression ":" typeName

     equality                                   ::=   expression "=" expression

     expression                                 ::=   term | ( metaVariable | qualifiedMetaVariable )



     term                                       ::=   compoundTerm | variableName

     compoundTerm                               ::=   constructorName<NO_WHITESPACE>parenthesisedTerms?




     label                                      ::=   labelName<NO_WHITESPACE>parenthesisedTerms?
     
          
     
     typeNames                                  ::=   typeName(<NO_WHITESPACE>","<NO_WHITESPACE>typeName)*

     labels                                     ::=   label(<NO_WHITESPACE>","<NO_WHITESPACE>label)*

     terms                                      ::=   term(<NO_WHITESPACE>","<NO_WHITESPACE>term)*
     


     parenthesisedTypeNames                     ::=   "("<NO_WHITESPACE>typeNames<NO_WHITESPACE>")"

     parenthesisedLabels                        ::=   "("<NO_WHITESPACE>labels<NO_WHITESPACE>")"                         

     parenthesisedTerms                         ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")"
     



     referenceName                              ::=   name

     typeName                                   ::=   name

     dependentTypeName                          ::=   name

     constructorName                            ::=   name

     variableName                               ::=   name

     metaVariableName                           ::=   name

     qualifiedMetaVariableName                  ::=   name
   
     labelName                                  ::=   name

     name                                       ::=   [unassigned]
       
`;

module.exports = grammar;
