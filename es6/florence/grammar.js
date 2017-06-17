'use strict';

const grammar = `

     document                                   ::=   header? verticalSpace? body?



     header                                     ::=   includeDirective+

     body                                       ::=   part+

     verticalSpace                              ::=   <END_OF_LINE>+



     part                                       ::=   verticalSpace

                                                  |   typeDeclaration
                                                                
                                                  |   typesDeclaration
                                                                
                                                  |   dependentTypeDeclaration
                                                                
                                                  |   dependentTypesDeclaration
                                                                
                                                  |   constructorDeclaration
                                                                
                                                  |   constructorsDeclaration
                                                                
                                                  |   variableDeclaration
                                                                
                                                  |   variablesDeclaration
                                                                
                                                  |   metavariableDeclaration
                                                                
                                                  |   metavariablesDeclaration
                                                                
                                                  |   qualifiedMetavariableDeclaration
                                                                
                                                  |   qualifiedMetavariablesDeclaration
                                                                
                                                  |   rule
                                                                
                                                  |   axiom
                                                                
                                                  |   lemma
                                                                
                                                  |   theorem
                                                                
                                                  |   error
                                                                     
                                                                                                                                          
                                                                     
     includeDirective                           ::=   "include"<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE>



     typeDeclaration                            ::=   "Type" type

     typesDeclaration                           ::=   "Types" types

     dependentTypeDeclaration                   ::=   "DependentType" dependentType

     dependentTypesDeclaration                  ::=   "DependentTypes" dependentTypes 

     constructorDeclaration                     ::=   "Constructor" constructor

     constructorsDeclaration                    ::=   "Constructors" constructors

     variableDeclaration                        ::=   "Variable" variable

     variablesDeclaration                       ::=   "Variables" variables

     metaVariableDeclaration                    ::=   "MetaVariable" metaVariable

     metaVariablesDeclaration                   ::=   "MetaVariables" metaVariables

     qualifiedMetaVariableDeclaration           ::=   "QualifiedMetaVariable" qualifiedMetaVariable

     qualifiedMetaVariablesDeclaration          ::=   "QualifiedMetaVariables" qualifiedMetaVariables
     
     
     
     rule                                       ::=   "Rule" parenthesisedLabels? <END_OF_LINE> premiseOrPremises? conclusion proof?

     axiom                                      ::=   "Axiom" parenthesisedLabels? <END_OF_LINE> unjustifiedStatement

     lemma                                      ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> unjustifiedStatement proof?

     theorem                                    ::=   "Theorem" parenthesisedLabels? <END_OF_LINE> unjustifiedStatement proof?



     error                                      ::=   .
     
     
     
     premiseOrPremises                          ::=   premise | premises

     premise                                    ::=   "Premise" <END_OF_LINE> unjustifiedStatement

     premises                                   ::=   "Premises" <END_OF_LINE> unjustifiedStatement unjustifiedStatement+

     conclusion                                 ::=   "Conclusion" <END_OF_LINE> unjustifiedStatementOrJustifiedStatement



     proof                                      ::=   "Proof" <END_OF_LINE> proofDerivationOrAbridgedProofDerivation

     proofDerivationOrAbridgedProofDerivation   ::=   proofDerivation | abridgedProofDerivation

     abridgedProofDerivation                    ::=   unjustifiedStatementOrJustifiedStatement

     proofDerivation                            ::=   derivation therefore

     derivation                                 ::=   subDerivation+

     therefore                                  ::=   "Therefore" <END_OF_LINE> unjustifiedStatementOrJustifiedStatement

     subDerivation                              ::=   subLemma | unjustifiedStatementOrJustifiedStatement



     subLemma                                   ::=   suppose then? hence unjustifiedStatementOrJustifiedStatement? verticalSpace?

     suppose                                    ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+

     then                                       ::=   "Then" <END_OF_LINE> derivation

     hence                                      ::=   "Hence" <END_OF_LINE> unjustifiedStatementOrJustifiedStatement



     type                                       ::=   typeName
   
     types                                      ::=   type(<NO_WHITESPACE>","<NO_WHITESPACE>type)*

     dependentType                              ::=   dependentTypeName<NO_WHITESPACE>"("<NO_WHITESPACE>typeName<NO_WHITESPACE>")"
   
     dependentTypes                             ::=   dependentType(<NO_WHITESPACE>","<NO_WHITESPACE>dependentType)*
   
     constructor                                ::=   constructorName<NO_WHITESPACE>parenthesisedTypes
   
     constructors                               ::=   constructor(<NO_WHITESPACE>","<NO_WHITESPACE>constructor)*
   
     variable                                   ::=   variableName(<NO_WHITESPACE>":"type)?
   
     variables                                  ::=   variable(<NO_WHITESPACE>","<NO_WHITESPACE>variable)*
   
     metaVariable                               ::=   metaVariableName

     metaVariables                              ::=   metaVariable(<NO_WHITESPACE>","<NO_WHITESPACE>metaVariable)*
   
     qualifiedMetaVariable                      ::=   qualifiedMetaVariableName
   
     qualifiedMetaVariables                     ::=   qualifiedMetaVariable(<NO_WHITESPACE>","<NO_WHITESPACE>qualifiedMetaVariable)*
   
   
   
     unjustifiedStatementOrJustifiedStatement   ::=   unjustifiedStatement | JustifiedStatement

     unjustifiedStatement                       ::=   statement <END_OF_LINE>

     justifiedStatement                         ::=   statement justification <END_OF_LINE>

     justification                              ::=   byOrFrom reference

     byOrFrom                                   ::=   "by" | "from"

     reference                                  ::=   referenceName<NO_WHITESPACE>parenthesisedTerms?

     referenceName                              ::=   name



     statement                                  ::=   proofAssertion | typeAssertion | equality | expression



     proofAssertion                             ::=   metaVariableOrQualifiedMetavariable "::" metaVariableOrQualifiedMetavariable

     typeAssertion                              ::=   expression ":" typeName

     equality                                   ::=   expression "=" expression

     expression                                 ::=   term | metaVariableOrQualifiedMetavariable



     metaVariableOrQualifiedMetavariable        ::=   metaVariable | qualifiedMetaVariable
     
     

     terms                                      ::=   term(<NO_WHITESPACE>","<NO_WHITESPACE>term)*
     
     term                                       ::=   compoundTerm | variableName

     compoundTerm                               ::=   constructorName<NO_WHITESPACE>parenthesisedTerms?



     labels                                     ::=   label(<NO_WHITESPACE>","<NO_WHITESPACE>label)*

     label                                      ::=   labelName<NO_WHITESPACE>parenthesisedTerms?
     
          
     
     parenthesisedLabels                        ::=   "("<NO_WHITESPACE>labels<NO_WHITESPACE>")"                         

     parenthesisedTerms                         ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")"
     
     parenthesisedTypes                         ::=   "("<NO_WHITESPACE>types<NO_WHITESPACE>")"



     typeName                                   ::=   name

     dependentTypeName                          ::=   name

     constructorName                            ::=   name

     variableName                               ::=   name

     metaVariableName                           ::=   name

     qualifiedMetaVariableName                  ::=   name
   
     labelName                                  ::=   name

     name                                       ::=   /\\w+/
       
`;

module.exports = grammar;
