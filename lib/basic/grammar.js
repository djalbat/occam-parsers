'use strict';

var grammar = '\n\n  S ::= X | X \'b\' | S S\n  \n  Y ::= S | \'a\'\n  \n  X ::= Y | \'c\'\n\n';

module.exports = grammar;

/*


 A1 ::= A2 'a' | 'b'

 A2 ::= A1 'c' | 'd'

 expression               ::=  expression '+' term | term

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/






 expression               ::=  term operatorThenTerm*
  
  operatorThenTerm         ::=  operator term
  
  operator                 ::=  '+' | '-' | '*' | '/'
  
  term                     ::=  naturalNumber | parenthesizedExpression
  
  naturalNumber            ::=  /\\d+/
  
  parenthesizedExpression  ::=  '(' expression ')'

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSwyRkFBTjs7QUFVQUMsT0FBT0MsT0FBUCxHQUFpQkYsT0FBakI7O0FBRUEiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuICBTIDo6PSBYIHwgWCAnYicgfCBTIFNcbiAgXG4gIFkgOjo9IFMgfCAnYSdcbiAgXG4gIFggOjo9IFkgfCAnYydcblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuXG4vKlxuXG5cbiBBMSA6Oj0gQTIgJ2EnIHwgJ2InXG5cbiBBMiA6Oj0gQTEgJ2MnIHwgJ2QnXG5cbiBleHByZXNzaW9uICAgICAgICAgICAgICAgOjo9ICBleHByZXNzaW9uICcrJyB0ZXJtIHwgdGVybVxuXG4gdGVybSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmF0dXJhbE51bWJlclxuXG4gbmF0dXJhbE51bWJlciAgICAgICAgICAgIDo6PSAgL1xcXFxkKy9cblxuXG5cblxuXG5cbiBleHByZXNzaW9uICAgICAgICAgICAgICAgOjo9ICB0ZXJtIG9wZXJhdG9yVGhlblRlcm0qXG4gIFxuICBvcGVyYXRvclRoZW5UZXJtICAgICAgICAgOjo9ICBvcGVyYXRvciB0ZXJtXG4gIFxuICBvcGVyYXRvciAgICAgICAgICAgICAgICAgOjo9ICAnKycgfCAnLScgfCAnKicgfCAnLydcbiAgXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hdHVyYWxOdW1iZXIgfCBwYXJlbnRoZXNpemVkRXhwcmVzc2lvblxuICBcbiAgbmF0dXJhbE51bWJlciAgICAgICAgICAgIDo6PSAgL1xcXFxkKy9cbiAgXG4gIHBhcmVudGhlc2l6ZWRFeHByZXNzaW9uICA6Oj0gICcoJyBleHByZXNzaW9uICcpJ1xuXG4qL1xuIl19