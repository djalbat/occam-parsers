"use strict";

const bnf = `document                             ::=   ( rule | axiom | lemma | theorem | conjecture | metalemma | metatheorem | metaconjecture | declaration | verticalSpace | error )+ ;



rule                                 ::=   "Rule" parenthesisedLabels <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;

axiom                                ::=   "Axiom" parenthesisedLabels <END_OF_LINE> ( indicativeConditional | unqualifiedStatement | unqualifiedNonsense ) ; 

lemma                                ::=   "Lemma" parenthesisedLabels? <END_OF_LINE> ( indicativeConditional | unqualifiedStatement | unqualifiedNonsense ) proof ;

theorem                              ::=   "Theorem" parenthesisedLabels <END_OF_LINE> ( indicativeConditional | unqualifiedStatement | unqualifiedNonsense ) proof ;

conjecture                           ::=   "Conjecture" parenthesisedLabels <END_OF_LINE> ( indicativeConditional | unqualifiedStatement | unqualifiedNonsense ) proof? ;

metalemma                            ::=   "Metalemma" parenthesisedLabels <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement | unqualifiedNonsense ) metaproof ;

metatheorem                          ::=   "Metatheorem" parenthesisedLabels <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement | unqualifiedNonsense ) metaproof ;

metaconjecture                       ::=   "Metaconjecture" parenthesisedLabels <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement | unqualifiedNonsense ) ;

declaration                          ::=   "Types" typesDeclaration <END_OF_LINE>

                                       |   "Contexts" contextsDeclaration <END_OF_LINE>
 
                                       |   "Operators" operatorsDeclaration <END_OF_LINE>
 
                                       |   "Variables" variablesDeclaration <END_OF_LINE>
 
                                       |   "Constructors" constructorsDeclaration <END_OF_LINE>
 
                                       |   "DependentTypes" dependentTypesDeclaration <END_OF_LINE>
 
                                       |   "DisjointTypes" disjointTypesDeclaration <END_OF_LINE>
 
                                       |   "Metavariables" metavariablesDeclaration <END_OF_LINE>
 
                                       |   "Abbreviations" abbreviationsDeclaration <END_OF_LINE>

                                       |   "Type" typeDeclaration <END_OF_LINE>
 
                                       |   "Context" contextDeclaration <END_OF_LINE>
 
                                       |   "Variable" variableDeclaration <END_OF_LINE>
 
                                       |   "Operator" operatorDeclaration <END_OF_LINE>
 
                                       |   "Constructor" constructorDeclaration <END_OF_LINE>
 
                                       |   "DependentType" dependentTypeDeclaration <END_OF_LINE>
                                       
                                       |   "DisjointType" disjointTypeDeclaration <END_OF_LINE>
                                       
                                       |   "Metavariable" metavariableDeclaration <END_OF_LINE>
 
                                       |   "Abbreviation" abbreviationDeclaration <END_OF_LINE>
 
                                       ;
                                      


typesDeclaration                     ::=   typeName ( "," typeName )+ ( ":" typeNames )? ;

contextsDeclaration                  ::=   contextDeclaration ( "," contextDeclaration )+ ;

operatorsDeclaration                 ::=   expression ( "," expression )+  ( ":" typeName )? ;

variablesDeclaration                 ::=   name ( "," name )+ ":" typeName ;

constructorsDeclaration              ::=   term ( "," term )+ ( ":" typeName )? ;

dependentTypesDeclaration            ::=   dependentTypeDeclaration ( "," dependentTypeDeclaration )+ ;

disjointTypesDeclaration             ::=   typeName ( "," typeName )+ ":" typeName ( "," typeName )+ ;

metavariablesDeclaration             ::=   metavariableDeclaration ( "," metavariableDeclaration )+ ;

abbreviationsDeclaration             ::=   abbreviationDeclaration ( "," abbreviationDeclaration )+;



typeDeclaration                      ::=   typeName ( ":" typeName )? ;

contextDeclaration                   ::=   contextName ( <NO_WHITESPACE>"(" typeName ")" )? ;

operatorDeclaration                  ::=   expression ( ":" typeName )? ;

variableDeclaration                  ::=   name ( ":" typeName )? ;

constructorDeclaration               ::=   term ( ":" typeName )? ;

dependentTypeDeclaration             ::=   typeName <NO_WHITESPACE>"(" typeName ")" ;

disjointTypeDeclaration              ::=   typeName ":" typeName ( "," typeName )+ ;

metavariableDeclaration              ::=   metavariableName ( <NO_WHITESPACE>"(" typeName ")" )? ;

abbreviationDeclaration              ::=   [custom] "for" [custom] 

                                       |   name "for" name
                                       
                                       ; 


  
premise                              ::=   "Premise" <END_OF_LINE> ( unqualifiedMetastatement | unqualifiedNonsense ) ;

premises                             ::=   "Premises" <END_OF_LINE> ( unqualifiedMetastatement | unqualifiedNonsense ) ( unqualifiedMetastatement | unqualifiedNonsense )+ ;

conclusion                           ::=   "Conclusion" <END_OF_LINE> ( qualifiedMetastatement | qualifiedNonsense ) ;



metaproof                            ::=   "Proof" <END_OF_LINE> 

                                           metastatementDefinition*

                                           nonsenseDefinition*

                                           metaProofDerivation? 
                                          
                                           ( qualifiedMetastatement | qualifiedNonsense ) ;
                                          
                                          

metaProofDerivation                  ::=   ( metaSublemma | qualifiedMetastatement | qualifiedStatement | qualifiedNonsense )+  

                                           "Therefore" <END_OF_LINE> ;                                           

metaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> ( unqualifiedMetastatement | unqualifiedNonsense )+ 

                                           "Hence" <END_OF_LINE> ( qualifiedMetastatement | qualifiedNonsense ) ;

metaSublemma                         ::=   "Suppose" <END_OF_LINE> 

                                           ( metaSublemma | qualifiedMetastatement | qualifiedStatement | qualifiedNonsense )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( metaSublemma | qualifiedMetastatement | qualifiedStatement | qualifiedNonsense )+ 
                                          
                                           )? 
                                          
                                           "Hence" <END_OF_LINE> ( qualifiedMetastatement | qualifiedNonsense ) ;



proof                                ::=   "Proof" <END_OF_LINE> 

                                           statementDefinition*

                                           nonsenseDefinition*

                                           proofDerivation? 
                                          
                                           ( qualifiedStatement | qualifiedNonsense ) ;
                                                                                         
                                                                                         
                                                                                         
proofDerivation                      ::=   ( sublemma | qualifiedStatement | qualifiedNonsense )+ 

                                           "Therefore" <END_OF_LINE> ;

indicativeConditional                ::=   "Suppose" <END_OF_LINE> ( unqualifiedStatement | unqualifiedNonsense )+ 

                                           "Hence" <END_OF_LINE> ( qualifiedStatement | qualifiedNonsense ) ;

sublemma                             ::=   "Suppose" <END_OF_LINE> 

                                           ( subLemma | qualifiedStatement | qualifiedNonsense )+ 

                                           ( 
                                          
                                             "Then" <END_OF_LINE> 
                                            
                                             ( subLemma | qualifiedStatement | qualifiedNonsense )+ 
                                          
                                           )? 
                                          
                                           "Hence" <END_OF_LINE> ( qualifiedStatement | qualifiedNonsense ) ;



metastatementDefinition              ::=   "let" unqualifiedMetastatement ;                                           
                                          
statementDefinition                  ::=   "let" unqualifiedStatement ;                                           

nonsenseDefinition                   ::=   "let" unqualifiedNonsense ;                                           



unqualifiedMetastatement             ::=   metastatement <END_OF_LINE> ;

unqualifiedStatement                 ::=   statement <END_OF_LINE> ;

unqualifiedNonsense                  ::=   nonsense <END_OF_LINE> ;



qualifiedMetastatement               ::=   metastatement qualification? <END_OF_LINE> ;

qualifiedStatement                   ::=   statement qualification? <END_OF_LINE> ;

qualifiedNonsense                    ::=   nonsense qualification? <END_OF_LINE> ;



nonsense                             ::=   ( [name] | [custom] | [special] | [reserved] | [unassigned] )+ ;



qualification                        ::=   ( "by" | "from" ) reference ;



parenthesisedLabels                  ::=   "(" labels ")" ;                    



metavariable                         ::=   metavariableName ( <NO_WHITESPACE>"(" term ")" )? ;

reference                            ::=   referenceName ( <NO_WHITESPACE>"(" term ")" )? ;

context                              ::=   contextName ( <NO_WHITESPACE>"(" term ")" )? ;

label                                ::=   labelName ( <NO_WHITESPACE>"(" term ")" )? ;



typeNames                            ::=   typeName ( "," typeName )* ;

labels                               ::=   label ( "," label )* ;



metavariableName                     ::=   [name] ;

referenceName                        ::=   [name] ;

contextName                          ::=   [name] ;

labelName                            ::=   [name] ;

typeName                             ::=   [name] ;

name                                 ::=   [name] ;



verticalSpace                        ::=   <END_OF_LINE>+ ;



error                                ::=   . ;`;

export default bnf;
