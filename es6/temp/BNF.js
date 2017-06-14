/*
 productions          ::= verticalSpace? production+

 production           ::= productionName "::=" definitions

 definitions          ::= definition ( "|" definition )*

 definition           ::= part+ verticalSpace?

 part                 ::= noWhitespacePart

 | optionalPart

 | zeroOrMoreParts

 | oneOrMoreParts

 | groupOfParts

 | productionName

 | regularExpression

 | significantTokenType

 | terminalSymbol

 | endOfLineSymbol

 noWhitespacePart     ::= "NO_WHITESPACE" part

 optionalPart         ::= "NO_WHITESPACE" part "?" optionalPart~

 | zeroOrMoreParts "?" optionalPart~

 | oneOrMoreParts "?" optionalPart~

 | groupOfParts "?" optionalPart~

 | productionName "?" optionalPart~

 | regularExpression "?" optionalPart~

 | significantTokenType "?" optionalPart~

 | terminalSymbol "?" optionalPart~

 | endOfLineSymbol "?" optionalPart~

 zeroOrMoreParts      ::= "NO_WHITESPACE" part "*" zeroOrMoreParts~

 | "NO_WHITESPACE" part "?" optionalPart~ "*" zeroOrMoreParts~

 | oneOrMoreParts "?" optionalPart~ "*" zeroOrMoreParts~

 | groupOfParts "?" optionalPart~ "*" zeroOrMoreParts~

 | productionName "?" optionalPart~ "*" zeroOrMoreParts~

 | regularExpression "?" optionalPart~ "*" zeroOrMoreParts~

 | significantTokenType "?" optionalPart~ "*" zeroOrMoreParts~

 | terminalSymbol "?" optionalPart~ "*" zeroOrMoreParts~

 | endOfLineSymbol "?" optionalPart~ "*" zeroOrMoreParts~

 | oneOrMoreParts "*" zeroOrMoreParts~

 | groupOfParts "*" zeroOrMoreParts~

 | productionName "*" zeroOrMoreParts~

 | regularExpression "*" zeroOrMoreParts~

 | significantTokenType "*" zeroOrMoreParts~

 | terminalSymbol "*" zeroOrMoreParts~

 | endOfLineSymbol "*" zeroOrMoreParts~

 oneOrMoreParts       ::= "NO_WHITESPACE" part "+" oneOrMoreParts~

 | "NO_WHITESPACE" part "?" optionalPart~ "+" oneOrMoreParts~

 | "NO_WHITESPACE" part "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | "NO_WHITESPACE" part "?" optionalPart~ "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | groupOfParts "?" optionalPart~ "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | productionName "?" optionalPart~ "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | regularExpression "?" optionalPart~ "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | significantTokenType "?" optionalPart~ "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | terminalSymbol "?" optionalPart~ "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | endOfLineSymbol "?" optionalPart~ "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | groupOfParts "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | productionName "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | regularExpression "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | significantTokenType "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | terminalSymbol "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | endOfLineSymbol "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | groupOfParts "?" optionalPart~ "+" oneOrMoreParts~

 | productionName "?" optionalPart~ "+" oneOrMoreParts~

 | regularExpression "?" optionalPart~ "+" oneOrMoreParts~

 | significantTokenType "?" optionalPart~ "+" oneOrMoreParts~

 | terminalSymbol "?" optionalPart~ "+" oneOrMoreParts~

 | endOfLineSymbol "?" optionalPart~ "+" oneOrMoreParts~

 | "NO_WHITESPACE" part "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | "NO_WHITESPACE" part "?" optionalPart~ "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | groupOfParts "?" optionalPart~ "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | productionName "?" optionalPart~ "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | regularExpression "?" optionalPart~ "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | significantTokenType "?" optionalPart~ "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | terminalSymbol "?" optionalPart~ "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | endOfLineSymbol "?" optionalPart~ "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | groupOfParts "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | productionName "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | regularExpression "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | significantTokenType "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | terminalSymbol "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | endOfLineSymbol "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | groupOfParts "+" oneOrMoreParts~

 | productionName "+" oneOrMoreParts~

 | regularExpression "+" oneOrMoreParts~

 | significantTokenType "+" oneOrMoreParts~

 | terminalSymbol "+" oneOrMoreParts~

 | endOfLineSymbol "+" oneOrMoreParts~

 groupOfParts         ::= "(" part+ ")"

 productionName       ::= [name]

 regularExpression    ::= [regularExpression]

 significantTokenType ::= [type]

 terminalSymbol       ::= [string]

 endOfLineSymbol      ::= "<END_OF_LINE>"

 verticalSpace        ::= [endOfLine]+

 optionalPart~        ::= "?" optionalPart~

 | ε

 zeroOrMoreParts~     ::= "?" optionalPart~ "*" zeroOrMoreParts~

 | "*" zeroOrMoreParts~

 | ε

 oneOrMoreParts~      ::= "?" optionalPart~ "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | "*" zeroOrMoreParts~ "?" optionalPart~ "+" oneOrMoreParts~

 | "?" optionalPart~ "+" oneOrMoreParts~

 | "?" optionalPart~ "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | "*" zeroOrMoreParts~ "+" oneOrMoreParts~

 | "+" oneOrMoreParts~

 | ε
 */