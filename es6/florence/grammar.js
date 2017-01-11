'use strict';

var grammar = `

    document                                  ::=   part*

    part                                      ::=   endsOfLines | rule | axiom | theorem | lemma | variable(s) | constructor(s) | type | definition | error
   
    error                                     ::=   string | special | keyword | unassigned 
    
    
    
    rule                                      ::=   Rule parenthesisedLabels? endsOfLines localVariable(s)? premise(s)? conclusion proof?
    
    axiom                                     ::=   Axiom parenthesisedLabels? endsOfLines localVariable(s)? premise(s)? conclusion
    
    theorem                                   ::=   Theorem parenthesisedLabels? endsOfLines localVariable(s)? premise(s)? conclusion proof
        
    lemma                                     ::=   Lemma parenthesisedLabels? endsOfLines localVariable(s)? premise(s)? conclusion proof    
    
    
    
    premise(s)                                ::=   premise | premises
    
    premise                                   ::=   Premise endsOfLines (labelled)statement
    
    premises                                  ::=   Premises endsOfLines (labelled)statement (labelled)statement+

    conclusion                                ::=   Conclusion endsOfLines statement

    proof                                     ::=   Proof endsOfLines subLemmaOr(labelled)statement* therefore

    therefore                                 ::=   Therefore endsOfLines (labelled)statement
    
    

    subLemmaOr(labelled)statement             ::=   subLemma | (labelled)statement

    subLemma                                  ::=   suppose then? hence
    
    

    suppose                                   ::=   Suppose endsOfLines statement+
    
    then                                      ::=   Then endsOfLines subLemmaOr(labelled)statement+
    
    hence                                     ::=   Hence endsOfLines (labelled)statement
    
    
    
    (labelled)statement                       ::=   labelledStatement | statement
    
    labelledStatement                         ::=   symbol+ by label endsOfLines
    
    statement                                 ::=   symbol+ endsOfLines
    
    symbol                                    ::=   unassigned | { | } | = | : | ( | )
    
    
    
    parenthesisedLabels                       ::=   (<NO_WHITESPACE>labels<NO_WHITESPACE>)
    
    labels                                    ::=   label<NO_WHITESPACE>commaThenLabel*
    
    commaThenLabel                            ::=   ,<NO_WHITESPACE>label

    label                                     ::=   unassigned
    


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

    variableName                              ::=   unassigned



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

    constructorName                           ::=   unassigned
    
    parenthesisedConstructorArguments         ::=   (<NO_WHITESPACE>constructorArguments<NO_WHITESPACE>)

    constructorArguments                      ::=   constructorArgument<NO_WHITESPACE>commaThenConstructorArgument*
    
    commaThenConstructorArgument              ::=   ,<NO_WHITESPACE>constructorArgument
    
    constructorArgument                       ::=   typeName | .. | unassigned

    
    
    object                                    ::=   Object endsOfLines? objectDeclaration endsOfLines

    objectDeclaration                         ::=   objectLiteral : typeName
    
    objectLiteral                             ::=   { properties }
    
    properties                                ::=   property commaThenProperty*
    
    commaThenProperty                         ::=   , property
    
    property                                  ::=   propertyName : typeName
    
    propertyName                              ::=   unassigned
    
    
    
    type                                      ::=   Type typeName endsOfLines

    typeName                                  ::=   unassigned

           

    endsOfLines                               ::=   <END_OF_LINE>+

`;

module.exports = grammar;
