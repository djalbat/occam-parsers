'use strict';

var grammar = `

    document                                  ::=   header? whitespace? body?
     
    header                                    ::=   directive+     
     
    body                                      ::=   part whitespaceOrPart*
    
    
    
    directive                                 ::=   includeDirective
    
    includeDirective                          ::=   'include'<NO_WHITESPACE>'('<NO_WHITESPACE>[string]<NO_WHITESPACE>')' <END_OF_LINE>
    
    
    
    whitespaceOrPart                          ::=   whitespace | part
    
    part                                      ::=   rule | axiom | theorem | lemma | variable(s) | constructor(s) | type | error
    
    
    
    rule                                      ::=   'Rule' parenthesisedLabels? <END_OF_LINE> localVariable(s)? premise(s)? conclusion proof?
    
    axiom                                     ::=   'Axiom' parenthesisedLabels? <END_OF_LINE> localVariable(s)? premise(s)? conclusion
    
    theorem                                   ::=   'Theorem' parenthesisedLabels? <END_OF_LINE> localVariable(s)? premise(s)? conclusion proof
        
    lemma                                     ::=   'Lemma' parenthesisedLabels? <END_OF_LINE> localVariable(s)? premise(s)? conclusion proof    
    
    
    
    premise(s)                                ::=   premise | premises
    
    premise                                   ::=   'Premise' <END_OF_LINE> (labelled)Statement
    
    premises                                  ::=   'Premises' <END_OF_LINE> (labelled)Statement (labelled)Statement+

    conclusion                                ::=   'Conclusion' <END_OF_LINE> (labelled)Statement

    proof                                     ::=   'Proof' <END_OF_LINE> subLemmaOr(labelled)Statement* therefore

    therefore                                 ::=   'Therefore' <END_OF_LINE> (labelled)Statement
    
    

    subLemmaOr(labelled)Statement             ::=   subLemma | (labelled)Statement

    subLemma                                  ::=   suppose then? hence whitespace?
    
    

    suppose                                   ::=   'Suppose' <END_OF_LINE> statement+
    
    then                                      ::=   'Then' <END_OF_LINE> subLemmaOr(labelled)Statement+
    
    hence                                     ::=   'Hence' <END_OF_LINE> (labelled)Statement
    
    
    
    (labelled)Statement                       ::=   labelledStatement | statement
    
    labelledStatement                         ::=   statementBody 'by' label <END_OF_LINE>
    
    statement                                 ::=   statementBody <END_OF_LINE>
    
    statementBody                             ::=   specialOrUnassigned+ 
    
    specialOrUnassigned                       ::=   [special] | [unassigned]
    
    
    
    parenthesisedLabels                       ::=   '('<NO_WHITESPACE>labels<NO_WHITESPACE>')'
    
    labels                                    ::=   label<NO_WHITESPACE>commaThenLabel*
    
    commaThenLabel                            ::=   ','<NO_WHITESPACE>label

    label                                     ::=   [unassigned]
    


    localVariable(s)                          ::=   variable(s)

    variable(s)                               ::=   variable | variables

    variables                                 ::=   'Variables' <END_OF_LINE>? variable(s)Declaration(s) <END_OF_LINE>
    
    variable                                  ::=   'Variable' <END_OF_LINE>? variableDeclaration <END_OF_LINE>
    
    variable(s)Declaration(s)                 ::=   variables(s)Declarations | variablesDeclaration

    variables(s)Declarations                  ::=   variable(s)Declaration semiColonThenVariable(s)Declaration+
       
    semiColonThenVariable(s)Declaration       ::=   ';' variable(s)Declaration
    
    variable(s)Declaration                    ::=   variablesDeclaration | variableDeclaration
    
    variablesDeclaration                      ::=   variableNames colonThenTypeName?

    variableDeclaration                       ::=   variableName colonThenTypeName?

    variableNames                             ::=   variableName commaThenVariableName+

    commaThenVariableName                     ::=   ',' variableName    
    
    colonThenTypeName                         ::=   ':' typeName

    variableName                              ::=   [unassigned]



    localConstructor(s)                       ::=   constructor(s)

    constructor(s)                            ::=   constructor | constructors

    constructors                              ::=   'Constructors' <END_OF_LINE>? constructor(s)Declaration(s) <END_OF_LINE>
    
    constructor                               ::=   'Constructor' <END_OF_LINE>? constructorDeclaration <END_OF_LINE>
    
    constructor(s)Declaration(s)              ::=   constructors(s)Declarations | constructorsDeclaration

    constructors(s)Declarations               ::=   constructor(s)Declaration semiColonThenConstructor(s)Declaration+
       
    semiColonThenConstructor(s)Declaration    ::=   ';' constructor(s)Declaration
    
    constructor(s)Declaration                 ::=   constructorsDeclaration | constructorDeclaration
    
    constructorsDeclaration                   ::=   constructorBodies colonThenTypeName?

    constructorDeclaration                    ::=   constructorBody colonThenTypeName?

    constructorBodies                         ::=   constructorBody commaThenConstructorBody+

    commaThenConstructorBody                  ::=   ',' constructorBody    
    
    colonThenTypeName                         ::=   ':' typeName

    constructorBody                           ::=   constructorName<NO_WHITESPACE>parenthesisedConstructorArguments?

    constructorName                           ::=   [unassigned]
    
    parenthesisedConstructorArguments         ::=   '('<NO_WHITESPACE>constructorArguments<NO_WHITESPACE>')'

    constructorArguments                      ::=   constructorArgument<NO_WHITESPACE>commaThenConstructorArgument*
    
    commaThenConstructorArgument              ::=   ','<NO_WHITESPACE>constructorArgument
    
    constructorArgument                       ::=   typeName | .. | [unassigned]

    
    
    object                                    ::=   'Object' <END_OF_LINE>? objectDeclaration <END_OF_LINE>

    objectDeclaration                         ::=   objectLiteral ':' typeName
    
    objectLiteral                             ::=   '{' properties '}'
    
    properties                                ::=   property commaThenProperty*
    
    commaThenProperty                         ::=   ',' property
    
    property                                  ::=   propertyName ':' typeName
    
    propertyName                              ::=   [unassigned]
    
    
    
    type                                      ::=   'Type' typeName <END_OF_LINE>

    typeName                                  ::=   [unassigned]


           
    error                                     ::=   [string] | [special] | [include] | [keyword] | [unassigned]
     
     
     
    whitespace                                ::=   <END_OF_LINE>+

`;

module.exports = grammar;
