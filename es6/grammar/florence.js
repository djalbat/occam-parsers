'use strict';

var grammar = `

    
    document                                  ::=   part*

    part                                      ::=   space | rule | axiom | theorem | lemma | variable(s) | constructor(s) | error
    
    
    
    space                                     ::=   <END_OF_LINE>+
   
    error                                     ::=   string | special | keyword | unassigned 
    
    
    
    rule                                      ::=   Rule parenthesisedLabel? <END_OF_LINE>+ premise(s)? conclusion proof?
    
    axiom                                     ::=   Axiom parenthesisedLabel? <END_OF_LINE>+ premise(s)? conclusion
    
    theorem                                   ::=   Theorem parenthesisedLabel? <END_OF_LINE>+ premise(s)? conclusion proof
        
    lemma                                     ::=   Lemma parenthesisedLabel? <END_OF_LINE>+ premise(s)? conclusion proof
    
    
    
    premise(s)                                ::=   premise | premises
    
    premise                                   ::=   Premise <END_OF_LINE>+ (labelled)statement
    
    premises                                  ::=   Premises <END_OF_LINE>+ (labelled)statement (labelled)statement+

    conclusion                                ::=   Conclusion <END_OF_LINE>+ statement

    proof                                     ::=   Proof <END_OF_LINE>+ subLemmaOr(labelled)statement* therefore

    therefore                                 ::=   Therefore <END_OF_LINE>+ (labelled)statement
    
    

    subLemmaOr(labelled)statement             ::=   subLemma | (labelled)statement

    subLemma                                  ::=   suppose then? hence
    
    

    suppose                                   ::=   Suppose <END_OF_LINE>+ statement+
    
    then                                      ::=   Then <END_OF_LINE>+ subLemmaOr(labelled)statement+
    
    hence                                     ::=   Hence <END_OF_LINE>+ (labelled)statement
    
    
    
    (labelled)statement                       ::=   labelledStatement | statement
    
    labelledStatement                         ::=   symbol+ by label <END_OF_LINE>+
    
    statement                                 ::=   symbol+ <END_OF_LINE>+
    
    symbol                                    ::=   unassigned | { | } | = | : | ( | )
    
    
    
    parenthesisedLabel                        ::=   (<NO_WHITESPACE>label<NO_WHITESPACE>)

    label                                     ::=   unassigned
    


    variable(s)                               ::=   variable | variables

    variables                                 ::=   Variables <END_OF_LINE>+ variable(s)Declaration(s)
    
    variable                                  ::=   Variable <END_OF_LINE>+ variableDeclaration
    
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



    constructor(s)                            ::=   constructor | constructors

    constructors                              ::=   Constructors <END_OF_LINE>+ constructor(s)Declaration(s)
    
    constructor                               ::=   Constructor <END_OF_LINE>+ constructorDeclaration
    
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
    
    

    typeName                                  ::=   unassigned
    
`;

module.exports = grammar;
