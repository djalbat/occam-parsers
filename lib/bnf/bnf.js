"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const bnf = `

      document                 ::=  ( rule | error )+ ;

      rule                     ::=  name opacityModifier? "::=" definitions ";" ;

      name                     ::=  [name] ;

      definitions              ::=  definition ( "|" definition )* ;

      definition               ::=  part+ precedence? ;
 
      part                     ::=  nonTerminalPart quantifier*

                                 |  terminalPart quantifier*

                                 ;

      nonTerminalPart          ::=  choiceOfParts

                                 |  sequenceOfParts

                                 |  ruleName callAheadModifier?

                                 ;

      terminalPart             ::=  significantTokenType
  
                                 |  regularExpression
 
                                 |  stringLiteral
  
                                 |  endOfLine
  
                                 |  wildcard
  
                                 |  epsilon

                                 |  noWhitespace
                              
                                 |  startOfContent

                                 ;
                              
      sequenceOfParts          ::=  "(" part part+ ")" ;

      choiceOfParts            ::=  "(" partChoice ( "|" partChoice )+ ")" ;

      partChoice               ::=  part precedence? ;

      ruleName                 ::=  [name] ;

      significantTokenType     ::=  [type] ;

      regularExpression        ::=  [regular-expression] ;

      stringLiteral            ::=  [string-literal] ;

      precedence               ::=  "(" [number]? ")" ;
      
      endOfLine                ::=  "<END_OF_LINE>" ;
      
      wildcard                 ::=  "." ;

      epsilon                  ::=  "ε" ;

      noWhitespace             ::=  "<NO_WHITESPACE>" ;                              

      startOfContent           ::+  "<START_OF_CONTENT>"; 
      
      quantifier               ::=  optionalQuantifier
 
                                 |  oneOrMoreQuantifier
  
                                 |  zeroOrMoreQuantifier
  
                                 ;

      opacityModifier          ::=  <NO_WHITESPACE>( "." | ".." );
      
      callAheadModifier        ::=  <NO_WHITESPACE>"..." ;

      optionalQuantifier       ::=  <NO_WHITESPACE>"?" ;

      oneOrMoreQuantifier      ::=  <NO_WHITESPACE>"+" ;

      zeroOrMoreQuantifier     ::=  <NO_WHITESPACE>"*" ;

      error.                   ::=  . ;

`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ibmYvYm5mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBibmYgPSBgXG5cbiAgICAgIGRvY3VtZW50ICAgICAgICAgICAgICAgICA6Oj0gICggcnVsZSB8IGVycm9yICkrIDtcblxuICAgICAgcnVsZSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmFtZSBvcGFjaXR5TW9kaWZpZXI/IFwiOjo9XCIgZGVmaW5pdGlvbnMgXCI7XCIgO1xuXG4gICAgICBuYW1lICAgICAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gICAgICBkZWZpbml0aW9ucyAgICAgICAgICAgICAgOjo9ICBkZWZpbml0aW9uICggXCJ8XCIgZGVmaW5pdGlvbiApKiA7XG5cbiAgICAgIGRlZmluaXRpb24gICAgICAgICAgICAgICA6Oj0gIHBhcnQrIHByZWNlZGVuY2U/IDtcbiBcbiAgICAgIHBhcnQgICAgICAgICAgICAgICAgICAgICA6Oj0gIG5vblRlcm1pbmFsUGFydCBxdWFudGlmaWVyKlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFBhcnQgcXVhbnRpZmllcipcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgICBub25UZXJtaW5hbFBhcnQgICAgICAgICAgOjo9ICBjaG9pY2VPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHNlcXVlbmNlT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlTmFtZSBjYWxsQWhlYWRNb2RpZmllcj9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgICB0ZXJtaW5hbFBhcnQgICAgICAgICAgICAgOjo9ICBzaWduaWZpY2FudFRva2VuVHlwZVxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uXG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdHJpbmdMaXRlcmFsXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcHNpbG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG5vV2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzdGFydE9mQ29udGVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHNlcXVlbmNlT2ZQYXJ0cyAgICAgICAgICA6Oj0gIFwiKFwiIHBhcnQgcGFydCsgXCIpXCIgO1xuXG4gICAgICBjaG9pY2VPZlBhcnRzICAgICAgICAgICAgOjo9ICBcIihcIiBwYXJ0Q2hvaWNlICggXCJ8XCIgcGFydENob2ljZSApKyBcIilcIiA7XG5cbiAgICAgIHBhcnRDaG9pY2UgICAgICAgICAgICAgICA6Oj0gIHBhcnQgcHJlY2VkZW5jZT8gO1xuXG4gICAgICBydWxlTmFtZSAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZSAgICAgOjo9ICBbdHlwZV0gO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiAgICAgICAgOjo9ICBbcmVndWxhci1leHByZXNzaW9uXSA7XG5cbiAgICAgIHN0cmluZ0xpdGVyYWwgICAgICAgICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gO1xuXG4gICAgICBwcmVjZWRlbmNlICAgICAgICAgICAgICAgOjo9ICBcIihcIiBbbnVtYmVyXT8gXCIpXCIgO1xuICAgICAgXG4gICAgICBlbmRPZkxpbmUgICAgICAgICAgICAgICAgOjo9ICBcIjxFTkRfT0ZfTElORT5cIiA7XG4gICAgICBcbiAgICAgIHdpbGRjYXJkICAgICAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcblxuICAgICAgZXBzaWxvbiAgICAgICAgICAgICAgICAgIDo6PSAgXCLOtVwiIDtcblxuICAgICAgbm9XaGl0ZXNwYWNlICAgICAgICAgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIiA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgIHN0YXJ0T2ZDb250ZW50ICAgICAgICAgICA6OisgIFwiPFNUQVJUX09GX0NPTlRFTlQ+XCI7IFxuICAgICAgXG4gICAgICBxdWFudGlmaWVyICAgICAgICAgICAgICAgOjo9ICBvcHRpb25hbFF1YW50aWZpZXJcbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9uZU9yTW9yZVF1YW50aWZpZXJcbiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB6ZXJvT3JNb3JlUXVhbnRpZmllclxuICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgb3BhY2l0eU1vZGlmaWVyICAgICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+KCBcIi5cIiB8IFwiLi5cIiApO1xuICAgICAgXG4gICAgICBjYWxsQWhlYWRNb2RpZmllciAgICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIi4uLlwiIDtcblxuICAgICAgb3B0aW9uYWxRdWFudGlmaWVyICAgICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+XCI/XCIgO1xuXG4gICAgICBvbmVPck1vcmVRdWFudGlmaWVyICAgICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5cIitcIiA7XG5cbiAgICAgIHplcm9Pck1vcmVRdWFudGlmaWVyICAgICA6Oj0gIDxOT19XSElURVNQQUNFPlwiKlwiIDtcblxuICAgICAgZXJyb3IuICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThGQTs7O2VBQUE7OztBQTVGQSxNQUFNQSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBGYixDQUFDO01BRUQsV0FBZUEifQ==