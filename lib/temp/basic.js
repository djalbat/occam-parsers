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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90ZW1wL2Jhc2ljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBwcm9kdWN0aW9ucyAgICAgICAgICA6Oj0gdmVydGljYWxTcGFjZT8gcHJvZHVjdGlvbitcblxuIHByb2R1Y3Rpb24gICAgICAgICAgIDo6PSBwcm9kdWN0aW9uTmFtZSBcIjo6PVwiIGRlZmluaXRpb25zXG5cbiBkZWZpbml0aW9ucyAgICAgICAgICA6Oj0gZGVmaW5pdGlvbiAoIFwifFwiIGRlZmluaXRpb24gKSpcblxuIGRlZmluaXRpb24gICAgICAgICAgIDo6PSBwYXJ0KyB2ZXJ0aWNhbFNwYWNlP1xuXG4gcGFydCAgICAgICAgICAgICAgICAgOjo9IG5vV2hpdGVzcGFjZVBhcnRcblxuIHwgb3B0aW9uYWxQYXJ0XG5cbiB8IHplcm9Pck1vcmVQYXJ0c1xuXG4gfCBvbmVPck1vcmVQYXJ0c1xuXG4gfCBncm91cE9mUGFydHNcblxuIHwgcHJvZHVjdGlvbk5hbWVcblxuIHwgcmVndWxhckV4cHJlc3Npb25cblxuIHwgc2lnbmlmaWNhbnRUb2tlblR5cGVcblxuIHwgdGVybWluYWxTeW1ib2xcblxuIHwgZW5kT2ZMaW5lU3ltYm9sXG5cbiBub1doaXRlc3BhY2VQYXJ0ICAgICA6Oj0gXCJOT19XSElURVNQQUNFXCIgcGFydFxuXG4gb3B0aW9uYWxQYXJ0ICAgICAgICAgOjo9IFwiTk9fV0hJVEVTUEFDRVwiIHBhcnQgXCI/XCIgb3B0aW9uYWxQYXJ0flxuXG4gfCB6ZXJvT3JNb3JlUGFydHMgXCI/XCIgb3B0aW9uYWxQYXJ0flxuXG4gfCBvbmVPck1vcmVQYXJ0cyBcIj9cIiBvcHRpb25hbFBhcnR+XG5cbiB8IGdyb3VwT2ZQYXJ0cyBcIj9cIiBvcHRpb25hbFBhcnR+XG5cbiB8IHByb2R1Y3Rpb25OYW1lIFwiP1wiIG9wdGlvbmFsUGFydH5cblxuIHwgcmVndWxhckV4cHJlc3Npb24gXCI/XCIgb3B0aW9uYWxQYXJ0flxuXG4gfCBzaWduaWZpY2FudFRva2VuVHlwZSBcIj9cIiBvcHRpb25hbFBhcnR+XG5cbiB8IHRlcm1pbmFsU3ltYm9sIFwiP1wiIG9wdGlvbmFsUGFydH5cblxuIHwgZW5kT2ZMaW5lU3ltYm9sIFwiP1wiIG9wdGlvbmFsUGFydH5cblxuIHplcm9Pck1vcmVQYXJ0cyAgICAgIDo6PSBcIk5PX1dISVRFU1BBQ0VcIiBwYXJ0IFwiKlwiIHplcm9Pck1vcmVQYXJ0c35cblxuIHwgXCJOT19XSElURVNQQUNFXCIgcGFydCBcIj9cIiBvcHRpb25hbFBhcnR+IFwiKlwiIHplcm9Pck1vcmVQYXJ0c35cblxuIHwgb25lT3JNb3JlUGFydHMgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+XG5cbiB8IGdyb3VwT2ZQYXJ0cyBcIj9cIiBvcHRpb25hbFBhcnR+IFwiKlwiIHplcm9Pck1vcmVQYXJ0c35cblxuIHwgcHJvZHVjdGlvbk5hbWUgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+XG5cbiB8IHJlZ3VsYXJFeHByZXNzaW9uIFwiP1wiIG9wdGlvbmFsUGFydH4gXCIqXCIgemVyb09yTW9yZVBhcnRzflxuXG4gfCBzaWduaWZpY2FudFRva2VuVHlwZSBcIj9cIiBvcHRpb25hbFBhcnR+IFwiKlwiIHplcm9Pck1vcmVQYXJ0c35cblxuIHwgdGVybWluYWxTeW1ib2wgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+XG5cbiB8IGVuZE9mTGluZVN5bWJvbCBcIj9cIiBvcHRpb25hbFBhcnR+IFwiKlwiIHplcm9Pck1vcmVQYXJ0c35cblxuIHwgb25lT3JNb3JlUGFydHMgXCIqXCIgemVyb09yTW9yZVBhcnRzflxuXG4gfCBncm91cE9mUGFydHMgXCIqXCIgemVyb09yTW9yZVBhcnRzflxuXG4gfCBwcm9kdWN0aW9uTmFtZSBcIipcIiB6ZXJvT3JNb3JlUGFydHN+XG5cbiB8IHJlZ3VsYXJFeHByZXNzaW9uIFwiKlwiIHplcm9Pck1vcmVQYXJ0c35cblxuIHwgc2lnbmlmaWNhbnRUb2tlblR5cGUgXCIqXCIgemVyb09yTW9yZVBhcnRzflxuXG4gfCB0ZXJtaW5hbFN5bWJvbCBcIipcIiB6ZXJvT3JNb3JlUGFydHN+XG5cbiB8IGVuZE9mTGluZVN5bWJvbCBcIipcIiB6ZXJvT3JNb3JlUGFydHN+XG5cbiBvbmVPck1vcmVQYXJ0cyAgICAgICA6Oj0gXCJOT19XSElURVNQQUNFXCIgcGFydCBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgXCJOT19XSElURVNQQUNFXCIgcGFydCBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBcIk5PX1dISVRFU1BBQ0VcIiBwYXJ0IFwiKlwiIHplcm9Pck1vcmVQYXJ0c34gXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgXCJOT19XSElURVNQQUNFXCIgcGFydCBcIj9cIiBvcHRpb25hbFBhcnR+IFwiKlwiIHplcm9Pck1vcmVQYXJ0c34gXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgZ3JvdXBPZlBhcnRzIFwiP1wiIG9wdGlvbmFsUGFydH4gXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBwcm9kdWN0aW9uTmFtZSBcIj9cIiBvcHRpb25hbFBhcnR+IFwiKlwiIHplcm9Pck1vcmVQYXJ0c34gXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgcmVndWxhckV4cHJlc3Npb24gXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiP1wiIG9wdGlvbmFsUGFydH4gXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IHNpZ25pZmljYW50VG9rZW5UeXBlIFwiP1wiIG9wdGlvbmFsUGFydH4gXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCB0ZXJtaW5hbFN5bWJvbCBcIj9cIiBvcHRpb25hbFBhcnR+IFwiKlwiIHplcm9Pck1vcmVQYXJ0c34gXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgZW5kT2ZMaW5lU3ltYm9sIFwiP1wiIG9wdGlvbmFsUGFydH4gXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBncm91cE9mUGFydHMgXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBwcm9kdWN0aW9uTmFtZSBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiP1wiIG9wdGlvbmFsUGFydH4gXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IHJlZ3VsYXJFeHByZXNzaW9uIFwiKlwiIHplcm9Pck1vcmVQYXJ0c34gXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgc2lnbmlmaWNhbnRUb2tlblR5cGUgXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCB0ZXJtaW5hbFN5bWJvbCBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiP1wiIG9wdGlvbmFsUGFydH4gXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IGVuZE9mTGluZVN5bWJvbCBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiP1wiIG9wdGlvbmFsUGFydH4gXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IGdyb3VwT2ZQYXJ0cyBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBwcm9kdWN0aW9uTmFtZSBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCByZWd1bGFyRXhwcmVzc2lvbiBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBzaWduaWZpY2FudFRva2VuVHlwZSBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCB0ZXJtaW5hbFN5bWJvbCBcIj9cIiBvcHRpb25hbFBhcnR+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBlbmRPZkxpbmVTeW1ib2wgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgXCJOT19XSElURVNQQUNFXCIgcGFydCBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBcIk5PX1dISVRFU1BBQ0VcIiBwYXJ0IFwiP1wiIG9wdGlvbmFsUGFydH4gXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgZ3JvdXBPZlBhcnRzIFwiP1wiIG9wdGlvbmFsUGFydH4gXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgcHJvZHVjdGlvbk5hbWUgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCByZWd1bGFyRXhwcmVzc2lvbiBcIj9cIiBvcHRpb25hbFBhcnR+IFwiKlwiIHplcm9Pck1vcmVQYXJ0c34gXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IHNpZ25pZmljYW50VG9rZW5UeXBlIFwiP1wiIG9wdGlvbmFsUGFydH4gXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgdGVybWluYWxTeW1ib2wgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBlbmRPZkxpbmVTeW1ib2wgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBncm91cE9mUGFydHMgXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgcHJvZHVjdGlvbk5hbWUgXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgcmVndWxhckV4cHJlc3Npb24gXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgc2lnbmlmaWNhbnRUb2tlblR5cGUgXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgdGVybWluYWxTeW1ib2wgXCIqXCIgemVyb09yTW9yZVBhcnRzfiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgZW5kT2ZMaW5lU3ltYm9sIFwiKlwiIHplcm9Pck1vcmVQYXJ0c34gXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IGdyb3VwT2ZQYXJ0cyBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgcHJvZHVjdGlvbk5hbWUgXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IHJlZ3VsYXJFeHByZXNzaW9uIFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBzaWduaWZpY2FudFRva2VuVHlwZSBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgdGVybWluYWxTeW1ib2wgXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IGVuZE9mTGluZVN5bWJvbCBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIGdyb3VwT2ZQYXJ0cyAgICAgICAgIDo6PSBcIihcIiBwYXJ0KyBcIilcIlxuXG4gcHJvZHVjdGlvbk5hbWUgICAgICAgOjo9IFtuYW1lXVxuXG4gcmVndWxhckV4cHJlc3Npb24gICAgOjo9IFtyZWd1bGFyRXhwcmVzc2lvbl1cblxuIHNpZ25pZmljYW50VG9rZW5UeXBlIDo6PSBbdHlwZV1cblxuIHRlcm1pbmFsU3ltYm9sICAgICAgIDo6PSBbc3RyaW5nXVxuXG4gZW5kT2ZMaW5lU3ltYm9sICAgICAgOjo9IFwiPEVORF9PRl9MSU5FPlwiXG5cbiB2ZXJ0aWNhbFNwYWNlICAgICAgICA6Oj0gW2VuZE9mTGluZV0rXG5cbiBvcHRpb25hbFBhcnR+ICAgICAgICA6Oj0gXCI/XCIgb3B0aW9uYWxQYXJ0flxuXG4gfCDOtVxuXG4gemVyb09yTW9yZVBhcnRzfiAgICAgOjo9IFwiP1wiIG9wdGlvbmFsUGFydH4gXCIqXCIgemVyb09yTW9yZVBhcnRzflxuXG4gfCBcIipcIiB6ZXJvT3JNb3JlUGFydHN+XG5cbiB8IM61XG5cbiBvbmVPck1vcmVQYXJ0c34gICAgICA6Oj0gXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiP1wiIG9wdGlvbmFsUGFydH4gXCIrXCIgb25lT3JNb3JlUGFydHN+XG5cbiB8IFwiKlwiIHplcm9Pck1vcmVQYXJ0c34gXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgXCI/XCIgb3B0aW9uYWxQYXJ0fiBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBcIipcIiB6ZXJvT3JNb3JlUGFydHN+IFwiK1wiIG9uZU9yTW9yZVBhcnRzflxuXG4gfCBcIitcIiBvbmVPck1vcmVQYXJ0c35cblxuIHwgzrVcbiAqLyJdfQ==