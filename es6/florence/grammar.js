'use strict';

var grammar = `

    document                                  ::=   header body
     
    header                                    ::=   directive*     
     
    body                                      ::=   part*
    
    
    
    directive                                 ::=   includeDirective | endsOfLines
    
    includeDirective                          ::=   include<NO_WHITESPACE>(<NO_WHITESPACE>[string]<NO_WHITESPACE>) endsOfLines
    
    

    part                                      ::=   rule | axiom | theorem | lemma | variable(s) | constructor(s) | type | error | endsOfLines
    
    
    
    rule                                      ::=   Rule parenthesisedLabels? endsOfLines localVariable(s)? premise(s)? conclusion proof?
    
    axiom                                     ::=   Axiom parenthesisedLabels? endsOfLines localVariable(s)? premise(s)? conclusion
    
    theorem                                   ::=   Theorem parenthesisedLabels? endsOfLines localVariable(s)? premise(s)? conclusion proof
        
    lemma                                     ::=   Lemma parenthesisedLabels? endsOfLines localVariable(s)? premise(s)? conclusion proof    
    
    
    
    premise(s)                                ::=   premise | premises
    
    premise                                   ::=   Premise endsOfLines (labelled)Statement
    
    premises                                  ::=   Premises endsOfLines (labelled)Statement+

    conclusion                                ::=   Conclusion endsOfLines (labelled)Statement

    proof                                     ::=   Proof endsOfLines subLemmaOr(labelled)Statement* therefore

    therefore                                 ::=   Therefore endsOfLines (labelled)Statement
    
    

    subLemmaOr(labelled)Statement             ::=   subLemma | (labelled)Statement

    subLemma                                  ::=   suppose then? hence
    
    

    suppose                                   ::=   Suppose endsOfLines statement+
    
    then                                      ::=   Then endsOfLines subLemmaOr(labelled)Statement+
    
    hence                                     ::=   Hence endsOfLines (labelled)Statement
    
    
    
    (labelled)Statement                       ::=   labelledStatement | statement
    
    labelledStatement                         ::=   statementBody by label endsOfLines
    
    statement                                 ::=   statementBody endsOfLines
    
    statementBody                             ::=   specialOrUnassigned+ 
    
    specialOrUnassigned                       ::=   [special] | [unassigned]
    
    
    
    parenthesisedLabels                       ::=   (<NO_WHITESPACE>labels<NO_WHITESPACE>)
    
    labels                                    ::=   label<NO_WHITESPACE>commaThenLabel*
    
    commaThenLabel                            ::=   ,<NO_WHITESPACE>label

    label                                     ::=   [unassigned]
    


    localVariable(s)                          ::=   variable(s)

    variable(s)                               ::=   variable | variables

    variables                                 ::=   Variables endsOfLines? variable(s)Declaration(s) endsOfLines
    
    variable                                  ::=   Variable endsOfLines? variableDeclaration endsOfLines
    
    variable(s)Declaration(s)                 ::=   variables(s)Declarations | variablesDeclaration

    variables(s)Declarations                  ::=   variable(s)Declaration semiColonThenVariable(s)Declaration+
       
    semiColonThenVariable(s)Declaration       ::=   ; variable(s)Declaration
    
    variable(s)Declaration                    ::=   variablesDeclaration | variableDeclaration
    
    variablesDeclaration                      ::=   variableNames colonThenTypeName?

    variableDeclaration                       ::=   variableName colonThenTypeName?

    variableNames                             ::=   variableName commaThenVariableName+

    commaThenVariableName                     ::=   , variableName    
    
    colonThenTypeName                         ::=   : typeName

    variableName                              ::=   [unassigned]



    localConstructor(s)                       ::=   constructor(s)

    constructor(s)                            ::=   constructor | constructors

    constructors                              ::=   Constructors endsOfLines? constructor(s)Declaration(s) endsOfLines
    
    constructor                               ::=   Constructor endsOfLines? constructorDeclaration endsOfLines
    
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

    constructorName                           ::=   [unassigned]
    
    parenthesisedConstructorArguments         ::=   (<NO_WHITESPACE>constructorArguments<NO_WHITESPACE>)

    constructorArguments                      ::=   constructorArgument<NO_WHITESPACE>commaThenConstructorArgument*
    
    commaThenConstructorArgument              ::=   ,<NO_WHITESPACE>constructorArgument
    
    constructorArgument                       ::=   typeName | .. | [unassigned]

    
    
    object                                    ::=   Object endsOfLines? objectDeclaration endsOfLines

    objectDeclaration                         ::=   objectLiteral : typeName
    
    objectLiteral                             ::=   { properties }
    
    properties                                ::=   property commaThenProperty*
    
    commaThenProperty                         ::=   , property
    
    property                                  ::=   propertyName : typeName
    
    propertyName                              ::=   [unassigned]
    
    
    
    type                                      ::=   Type typeName endsOfLines

    typeName                                  ::=   [unassigned]

           

    error                                     ::=   [string] | [special] | [include] | [keyword] | [unassigned] 
    


    endsOfLines                               ::=   <END_OF_LINE>+

`;

module.exports = grammar;
