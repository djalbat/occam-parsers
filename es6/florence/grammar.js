'use strict';

const grammar = `


     document                             ::=   header? verticalSpace? body?



     header                               ::=   includeDirective+

     body                                 ::=   part+

     verticalSpace                        ::=   <END_OF_LINE>+



     includeDirective                     ::=   "include"<NO_WHITESPACE>"("<NO_WHITESPACE>[string]<NO_WHITESPACE>")" <END_OF_LINE>



     part                                 ::=   verticalSpace

                                            |   rule
                                                                
                                            |   axiom
                                                                
                                            |   lemma
                                                                
                                            |   theorem
                                                                
                                            |   "Type" typeDefinition

                                            |   "Types" typesDefinition

                                            |   "Variable" variableDefinition

                                            |   "Variables" variablesDefinition

                                            |   "Constructor" constructorDefinition

                                            |   "Constructors" constructorsDefinition

                                            |   "Abbreviation" abbreviationDefinition

                                            |   "Abbreviations" abbreviationsDefinition

                                            |   "DependentType" dependentTypeDefinition

                                            |   "DependentTypes" dependentTypesDefinition

                                            |   "Metavariable" metavariableDefinition

                                            |   "Metavariables" metavariablesDefinition

                                            |   "QualifiedMetavariable" qualifiedMetavariableDefinition

                                            |   "QualifiedMetavariables" qualifiedMetavariablesDefinition
                                                                
                                            |   error
                                                                     
                                                                                                                                          
                                                                     
     rule                                 ::=   "Rule" parenthesisedLabels? <END_OF_LINE> ( premise | premises )? conclusion metaProof?

     axiom                                ::=   "Axiom" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) 

     lemma                                ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) proof?

     theorem                              ::=   "Theorem" parenthesisedLabels? <END_OF_LINE> ( unjustifiedStatement | indicativeConditional ) proof?



     typesDefinition                      ::=   typeDefinition ( "," typeDefinition)+

     variablesDefinition                  ::=   variableDefinition ( "," variableDefinition)+
   
     constructorsDefinition               ::=   constructorDefinition ( "," constructorDefinition)+
   
     abbreviationsDefinition              ::=   abbreviationDefinition ( "," abbreviationDefinition)+
   
     dependentTypesDefinition             ::=   dependentTypeDefinition ( "," dependentTypeDefinition)*
   
     metavariablesDefinition              ::=   metavariableDefinition ( "," metavariableDefinition)*
   
     qualifiedMetavariablesDefinition     ::=   qualifiedMetavariableDefinition ( "," qualifiedMetavariableDefinition)*
   


     typeDefinition                       ::=   typeName
   
     variableDefinition                   ::=   variableName(<NO_WHITESPACE>":"typeName)?
   
     constructorDefinition                ::=   constructorName<NO_WHITESPACE>parenthesisedTypeNames?<NO_WHITESPACE>":"<NO_WHITESPACE>typeName
   
     abbreviationDefinition               ::=   typeName "for" typeName | constructorName "for" constructorName

     dependentTypeDefinition              ::=   dependentTypeName<NO_WHITESPACE>"("<NO_WHITESPACE>typeName<NO_WHITESPACE>")"
   
     metavariableDefinition               ::=   metavariableName

     qualifiedMetavariableDefinition      ::=   qualifiedMetavariableName<NO_WHITESPACE>"("<NO_WHITESPACE>typeName<NO_WHITESPACE>")"
   
   
   
     error                                ::=   .
     
     
     
     premise                              ::=   "Premise" <END_OF_LINE> unjustifiedMetastatement

     premises                             ::=   "Premises" <END_OF_LINE> unjustifiedMetastatement unjustifiedMetastatement+

     conclusion                           ::=   "Conclusion" <END_OF_LINE> unjustifiedOrJustifiedMetastatement
     
     metaProof                            ::=   "Proof" <END_OF_LINE> metaderivation "Therefore" <END_OF_LINE> unjustifiedOrJustifiedMetastatement

     subRule                              ::=   "Suppose" <END_OF_LINE> unjustifiedMetastatement+ "Then" <END_OF_LINE> metaderivation "Hence" <END_OF_LINE> unjustifiedOrJustifiedMetastatement
     
     metaderivation                       ::=   ( subRule | unjustifiedOrJustifiedMetastatement )+
     
     unjustifiedOrJustifiedMetastatement  ::=   unjustifiedMetastatement | justifiedMetastatement
     
     unjustifiedMetastatement             ::=   metastatement <END_OF_LINE>
     
     justifiedMetastatement               ::=   metastatement "by" reference <END_OF_LINE>



     metastatement                        ::=   proofAssertion

      
      
     proofAssertion                       ::=   context "⊢" ( qualifiedMetavariable | metavariable ) "::" ( qualifiedMetavariable | metavariable )



     qualifiedMetavariable                ::=   qualifiedMetavariableName<NO_WHITESPACE>parenthesisedTerms
     
     metavariable                         ::=   metavariableName
     
     

     proof                                ::=   "Proof" <END_OF_LINE> ( proofDerivation | abridgedProofDerivation )

     abridgedProofDerivation              ::=   unjustifiedOrJustifiedStatement

     proofDerivation                      ::=   derivation therefore

     derivation                           ::=   subDerivation+

     therefore                            ::=   "Therefore" <END_OF_LINE> unjustifiedOrJustifiedStatement

     subDerivation                        ::=   subLemma | unjustifiedOrJustifiedStatement



     indicativeConditional                ::=   suppose hence unjustifiedOrJustifiedStatement?

     subLemma                             ::=   suppose then? hence unjustifiedOrJustifiedStatement? verticalSpace?

     suppose                              ::=   "Suppose" <END_OF_LINE> unjustifiedStatement+

     then                                 ::=   "Then" <END_OF_LINE> derivation

     hence                                ::=   "Hence" <END_OF_LINE> unjustifiedOrJustifiedStatement



     unjustifiedOrJustifiedStatement      ::=   unjustifiedStatement | justifiedStatement

     unjustifiedStatement                 ::=   statement <END_OF_LINE>

     justifiedStatement                   ::=   statement ( "by" | "from" ) reference <END_OF_LINE>

     reference                            ::=   referenceName<NO_WHITESPACE>parenthesisedTerms?



     statement                            ::=   typeAssertion 
                                                  
                                            |   equality 
                                                  
                                            |   expression



     typeAssertion                        ::=   expression ":" typeName

     equality                             ::=   expression "=" expression

     expression                           ::=   term



     context                              ::=   contextName<NO_WHITESPACE>parenthesisedTerms?



     parenthesisedTypeNames               ::=   "("<NO_WHITESPACE>typeNames<NO_WHITESPACE>")"

     parenthesisedLabels                  ::=   "("<NO_WHITESPACE>labels<NO_WHITESPACE>")"                         

     parenthesisedTerms                   ::=   "("<NO_WHITESPACE>terms<NO_WHITESPACE>")"     



     typeNames                            ::=   typeName ( "," typeName)*

     labels                               ::=   label ( "," label)*

     terms                                ::=   term ( "," term)*
     


     label                                ::=   labelName<NO_WHITESPACE>parenthesisedTerms?
     
          
     
     term                                 ::=   compoundTerm | variableName

     compoundTerm                         ::=   constructorName<NO_WHITESPACE>parenthesisedTerms?



     referenceName                        ::=   name

     contextName                          ::=   name

     typeName                             ::=   name

     variableName                         ::=   name

     constructorName                      ::=   name

     dependentTypeName                    ::=   name

     metavariableName                     ::=   name

     qualifiedMetavariableName            ::=   name
   
     labelName                            ::=   name

     name                                 ::=   [unassigned]
       
`;

module.exports = grammar;
