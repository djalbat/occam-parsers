'use strict';

var grammar = `


    document                                  ::=   part*

    part                                      ::=   ↲ | rule | axiom | theorem | lemma | variable(s) | constructor(s) | type | definition | error
   
    error                                     ::=   string | special | keyword | unassigned 
    
    
    
    rule                                      ::=   Rule parenthesisedLabels? ↲ localVariable(s)? premise(s)? conclusion proof?
    
    axiom                                     ::=   Axiom parenthesisedLabels? ↲ localVariable(s)? premise(s)? conclusion
    
    theorem                                   ::=   Theorem parenthesisedLabels? ↲ localVariable(s)? premise(s)? conclusion proof
        
    lemma                                     ::=   Lemma parenthesisedLabels? ↲ localVariable(s)? premise(s)? conclusion proof    
    
    
    
    premise(s)                                ::=   premise | premises
    
    premise                                   ::=   Premise ↲ (labelled)statement
    
    premises                                  ::=   Premises ↲ (labelled)statement (labelled)statement+

    conclusion                                ::=   Conclusion ↲ statement

    proof                                     ::=   Proof ↲ subLemmaOr(labelled)statement* therefore

    therefore                                 ::=   Therefore ↲ (labelled)statement
    
    

    subLemmaOr(labelled)statement             ::=   subLemma | (labelled)statement

    subLemma                                  ::=   suppose then? hence
    
    

    suppose                                   ::=   Suppose ↲ statement+
    
    then                                      ::=   Then ↲ subLemmaOr(labelled)statement+
    
    hence                                     ::=   Hence ↲ (labelled)statement
    
    
    
    (labelled)statement                       ::=   labelledStatement | statement
    
    labelledStatement                         ::=   symbol+ by label ↲
    
    statement                                 ::=   symbol+ ↲
    
    symbol                                    ::=   unassigned | { | } | = | : | ( | )
    
    
    
    parenthesisedLabels                       ::=   (<NO_WHITESPACE>labels<NO_WHITESPACE>)
    
    labels                                    ::=   label<NO_WHITESPACE>commaThenLabel*
    
    commaThenLabel                            ::=   ,<NO_WHITESPACE>label

    label                                     ::=   unassigned
    


    localVariable(s)                          ::=   variable(s)

    variable(s)                               ::=   variable | variables

    variables                                 ::=   Variables ↲? variable(s)Declaration(s) ↲
    
    variable                                  ::=   Variable ↲? variableDeclaration ↲
    
    variable(s)Declaration(s)                 ::=   variables(s)Declarations | variablesDeclaration

    variables(s)Declarations                  ::=   variable(s)Declaration semiColonThenVariable(s)Declaration+
       
    semiColonThenVariable(s)Declaration       ::=   ; variable(s)Declaration
    
    variable(s)Declaration                    ::=   variablesDeclaration | variableDeclaration
    
    variablesDeclaration                      ::=   variableNames colonThenTypeName?

    variableDeclaration                       ::=   variableName colonThenTypeName?

    variableNames                             ::=   variableName commaThenVariableName+

    commaThenVariableName                     ::=   , variableName    
    
    colonThenTypeName                         ::=   : typeName

    variableName                              ::=   unassigned



    localConstructor(s)                       ::=   constructor(s)

    constructor(s)                            ::=   constructor | constructors

    constructors                              ::=   Constructors ↲? constructor(s)Declaration(s) ↲
    
    constructor                               ::=   Constructor ↲? constructorDeclaration ↲
    
    constructor(s)Declaration(s)              ::=   constructors(s)Declarations | constructorsDeclaration

    constructors(s)Declarations               ::=   constructor(s)Declaration semiColonThenConstructor(s)Declaration+
       
    semiColonThenConstructor(s)Declaration    ::=   ; constructor(s)Declaration
    
    constructor(s)Declaration                 ::=   constructorsDeclaration | constructorDeclaration
    
    constructorsDeclaration                   ::=   constructorBodies colonThenTypeName?

    constructorDeclaration                    ::=   constructorBody colonThenTypeName?

    constructorBodies                         ::=   constructorBody commaThenConstructorBody+

    commaThenConstructorBody                  ::=   , constructorBody    
    
    colonThenTypeName                         ::=   : typeName

    constructorBody                           ::=   constructorName<NO_WHITESPACE>parenthesisedConstructorArguments?

    constructorName                           ::=   unassigned
    
    parenthesisedConstructorArguments         ::=   (<NO_WHITESPACE>constructorArguments<NO_WHITESPACE>)

    constructorArguments                      ::=   constructorArgument<NO_WHITESPACE>commaThenConstructorArgument*
    
    commaThenConstructorArgument              ::=   ,<NO_WHITESPACE>constructorArgument
    
    constructorArgument                       ::=   typeName | .. | unassigned
    
    
    
    type                                      ::=   Type typeName ↲

    typeName                                  ::=   unassigned

           
    ↲                                         ::=   <END_OF_LINE>+

`;

module.exports = grammar;
