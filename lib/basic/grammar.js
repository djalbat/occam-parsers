'use strict';

var grammar = '\n\n A ::= A \'a\' | B \'b\' | \'d\'\n\n B ::= C \'c\'\n\n C ::= A \'e\' | B \'f\'\n\n\n';

module.exports = grammar;

/*

 expression               ::=  expression '+' term | term

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/



 A ::= B | 'a'

 B ::= C | 'b' 'c'

 C ::= 'd' 'e' | A



 A ::= B | 'a'

 B ::= C 'b' | 'c'

 C ::= d | A 'e'



 S ::= X 'b' | Y

 Y ::= X | 'a'

 X ::= S | 'c'



 A1 ::= A2 'a' | 'b'

 A2 ::= A1 'c' | 'd'



  expression               ::=  term operatorThenTerm*
  
  operatorThenTerm         ::=  operator term
  
  operator                 ::=  '+' | '-' | '*' | '/'
  
  term                     ::=  naturalNumber | parenthesizedExpression
  
  naturalNumber            ::=  /\\d+/
  
  parenthesizedExpression  ::=  '(' expression ')'

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxvR0FBTjs7QUFXQUMsT0FBT0MsT0FBUCxHQUFpQkYsT0FBakI7O0FBRUEiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuIEEgOjo9IEEgJ2EnIHwgQiAnYicgfCAnZCdcblxuIEIgOjo9IEMgJ2MnXG5cbiBDIDo6PSBBICdlJyB8IEIgJ2YnXG5cblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuXG4vKlxuXG4gZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgZXhwcmVzc2lvbiAnKycgdGVybSB8IHRlcm1cblxuIHRlcm0gICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hdHVyYWxOdW1iZXJcblxuIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG5cblxuXG4gQSA6Oj0gQiB8ICdhJ1xuXG4gQiA6Oj0gQyB8ICdiJyAnYydcblxuIEMgOjo9ICdkJyAnZScgfCBBXG5cblxuXG4gQSA6Oj0gQiB8ICdhJ1xuXG4gQiA6Oj0gQyAnYicgfCAnYydcblxuIEMgOjo9IGQgfCBBICdlJ1xuXG5cblxuIFMgOjo9IFggJ2InIHwgWVxuXG4gWSA6Oj0gWCB8ICdhJ1xuXG4gWCA6Oj0gUyB8ICdjJ1xuXG5cblxuIEExIDo6PSBBMiAnYScgfCAnYidcblxuIEEyIDo6PSBBMSAnYycgfCAnZCdcblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgdGVybSBvcGVyYXRvclRoZW5UZXJtKlxuICBcbiAgb3BlcmF0b3JUaGVuVGVybSAgICAgICAgIDo6PSAgb3BlcmF0b3IgdGVybVxuICBcbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgIDo6PSAgJysnIHwgJy0nIHwgJyonIHwgJy8nXG4gIFxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgOjo9ICBuYXR1cmFsTnVtYmVyIHwgcGFyZW50aGVzaXplZEV4cHJlc3Npb25cbiAgXG4gIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG4gIFxuICBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbiAgOjo9ICAnKCcgZXhwcmVzc2lvbiAnKSdcblxuKi9cbiJdfQ==