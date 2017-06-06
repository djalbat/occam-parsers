'use strict';

var grammar = '\n\n  A1 ::= A2 \'a\' | \'b\'\n\n  A2 ::= A1 \'c\' | \'d\'\n  \n';

module.exports = grammar;

/*


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSw0RUFBTjs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQkYsT0FBakI7O0FBRUEiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuICBBMSA6Oj0gQTIgJ2EnIHwgJ2InXG5cbiAgQTIgOjo9IEExICdjJyB8ICdkJ1xuICBcbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcblxuLypcblxuXG4gZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgZXhwcmVzc2lvbiAnKycgdGVybSB8IHRlcm1cblxuIHRlcm0gICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hdHVyYWxOdW1iZXJcblxuIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG5cblxuXG5cblxuXG4gZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgdGVybSBvcGVyYXRvclRoZW5UZXJtKlxuICBcbiAgb3BlcmF0b3JUaGVuVGVybSAgICAgICAgIDo6PSAgb3BlcmF0b3IgdGVybVxuICBcbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgIDo6PSAgJysnIHwgJy0nIHwgJyonIHwgJy8nXG4gIFxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgOjo9ICBuYXR1cmFsTnVtYmVyIHwgcGFyZW50aGVzaXplZEV4cHJlc3Npb25cbiAgXG4gIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG4gIFxuICBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbiAgOjo9ICAnKCcgZXhwcmVzc2lvbiAnKSdcblxuKi9cbiJdfQ==