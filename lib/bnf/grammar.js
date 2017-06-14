'use strict';

var grammar = '\n\n part                     ::=  optionalPart  \n  \n optionalPart             ::=  part<NO_WHITESPACE>"?"\n\n';

module.exports = grammar;

/*

 productions              ::=  verticalSpace? production+

 production               ::=  productionName "::=" definitions

 definitions              ::=  definition ( "|" definition )*

 definition               ::=  part+ verticalSpace?

 part                     ::=  noWhitespacePart

 |  optionalPart

 |  zeroOrMoreParts

 |  oneOrMoreParts

 |  groupOfParts

 |  productionName

 |  regularExpression

 |  significantTokenType

 |  terminalSymbol

 |  endOfLineSymbol

 noWhitespacePart         ::=  "<NO_WHITESPACE>" part

 optionalPart             ::=  part<NO_WHITESPACE>"?"

 zeroOrMoreParts          ::=  part<NO_WHITESPACE>"*"

 oneOrMoreParts           ::=  part<NO_WHITESPACE>"+"

 groupOfParts             ::=  "(" part+ ")"

 productionName           ::=  [name]

 regularExpression        ::=  [regularExpression]

 significantTokenType     ::=  [type]

 terminalSymbol           ::=  [string]

 endOfLineSymbol          ::=  "<END_OF_LINE>"

 verticalSpace            ::=  [endOfLine]+

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ibmYvZ3JhbW1hci5qcyJdLCJuYW1lcyI6WyJncmFtbWFyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsNEhBQU47O0FBUUFDLE9BQU9DLE9BQVAsR0FBaUJGLE9BQWpCOztBQUVBIiwiZmlsZSI6ImdyYW1tYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdyYW1tYXIgPSBgXG5cbiBwYXJ0ICAgICAgICAgICAgICAgICAgICAgOjo9ICBvcHRpb25hbFBhcnQgIFxuICBcbiBvcHRpb25hbFBhcnQgICAgICAgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCI/XCJcblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuXG4vKlxuXG4gcHJvZHVjdGlvbnMgICAgICAgICAgICAgIDo6PSAgdmVydGljYWxTcGFjZT8gcHJvZHVjdGlvbitcblxuIHByb2R1Y3Rpb24gICAgICAgICAgICAgICA6Oj0gIHByb2R1Y3Rpb25OYW1lIFwiOjo9XCIgZGVmaW5pdGlvbnNcblxuIGRlZmluaXRpb25zICAgICAgICAgICAgICA6Oj0gIGRlZmluaXRpb24gKCBcInxcIiBkZWZpbml0aW9uICkqXG5cbiBkZWZpbml0aW9uICAgICAgICAgICAgICAgOjo9ICBwYXJ0KyB2ZXJ0aWNhbFNwYWNlP1xuXG4gcGFydCAgICAgICAgICAgICAgICAgICAgIDo6PSAgbm9XaGl0ZXNwYWNlUGFydFxuXG4gfCAgb3B0aW9uYWxQYXJ0XG5cbiB8ICB6ZXJvT3JNb3JlUGFydHNcblxuIHwgIG9uZU9yTW9yZVBhcnRzXG5cbiB8ICBncm91cE9mUGFydHNcblxuIHwgIHByb2R1Y3Rpb25OYW1lXG5cbiB8ICByZWd1bGFyRXhwcmVzc2lvblxuXG4gfCAgc2lnbmlmaWNhbnRUb2tlblR5cGVcblxuIHwgIHRlcm1pbmFsU3ltYm9sXG5cbiB8ICBlbmRPZkxpbmVTeW1ib2xcblxuIG5vV2hpdGVzcGFjZVBhcnQgICAgICAgICA6Oj0gIFwiPE5PX1dISVRFU1BBQ0U+XCIgcGFydFxuXG4gb3B0aW9uYWxQYXJ0ICAgICAgICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiP1wiXG5cbiB6ZXJvT3JNb3JlUGFydHMgICAgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIqXCJcblxuIG9uZU9yTW9yZVBhcnRzICAgICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIitcIlxuXG4gZ3JvdXBPZlBhcnRzICAgICAgICAgICAgIDo6PSAgXCIoXCIgcGFydCsgXCIpXCJcblxuIHByb2R1Y3Rpb25OYW1lICAgICAgICAgICA6Oj0gIFtuYW1lXVxuXG4gcmVndWxhckV4cHJlc3Npb24gICAgICAgIDo6PSAgW3JlZ3VsYXJFeHByZXNzaW9uXVxuXG4gc2lnbmlmaWNhbnRUb2tlblR5cGUgICAgIDo6PSAgW3R5cGVdXG5cbiB0ZXJtaW5hbFN5bWJvbCAgICAgICAgICAgOjo9ICBbc3RyaW5nXVxuXG4gZW5kT2ZMaW5lU3ltYm9sICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCJcblxuIHZlcnRpY2FsU3BhY2UgICAgICAgICAgICA6Oj0gIFtlbmRPZkxpbmVdK1xuXG4gKi8iXX0=