'use strict';

var grammar = '\n\n expression               ::=  expression \'+\' term | term\n\n term                     ::=  naturalNumber\n\n naturalNumber            ::=  /\\d+/\n\n\n';

module.exports = grammar;

/*

 A ::= A 'a' | B 'b' | 'd'

 B ::= C 'c'

 C ::= A 'e' | B 'f'




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSwwS0FBTjs7QUFXQUMsT0FBT0MsT0FBUCxHQUFpQkYsT0FBakI7O0FBRUEiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuIGV4cHJlc3Npb24gICAgICAgICAgICAgICA6Oj0gIGV4cHJlc3Npb24gJysnIHRlcm0gfCB0ZXJtXG5cbiB0ZXJtICAgICAgICAgICAgICAgICAgICAgOjo9ICBuYXR1cmFsTnVtYmVyXG5cbiBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgOjo9ICAvXFxcXGQrL1xuXG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcblxuLypcblxuIEEgOjo9IEEgJ2EnIHwgQiAnYicgfCAnZCdcblxuIEIgOjo9IEMgJ2MnXG5cbiBDIDo6PSBBICdlJyB8IEIgJ2YnXG5cblxuXG5cbiBBIDo6PSBCIHwgJ2EnXG5cbiBCIDo6PSBDIHwgJ2InICdjJ1xuXG4gQyA6Oj0gJ2QnICdlJyB8IEFcblxuXG5cblxuXG5cblxuXG4gQSA6Oj0gQiB8ICdhJ1xuXG4gQiA6Oj0gQyAnYicgfCAnYydcblxuIEMgOjo9IGQgfCBBICdlJ1xuXG5cblxuXG5cblxuIFMgOjo9IFggJ2InIHwgWVxuXG4gWSA6Oj0gWCB8ICdhJ1xuXG4gWCA6Oj0gUyB8ICdjJ1xuXG5cblxuXG5cbiBBMSA6Oj0gQTIgJ2EnIHwgJ2InXG5cbiBBMiA6Oj0gQTEgJ2MnIHwgJ2QnXG5cblxuXG5cblxuXG4gZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgdGVybSBvcGVyYXRvclRoZW5UZXJtKlxuICBcbiAgb3BlcmF0b3JUaGVuVGVybSAgICAgICAgIDo6PSAgb3BlcmF0b3IgdGVybVxuICBcbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgIDo6PSAgJysnIHwgJy0nIHwgJyonIHwgJy8nXG4gIFxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgOjo9ICBuYXR1cmFsTnVtYmVyIHwgcGFyZW50aGVzaXplZEV4cHJlc3Npb25cbiAgXG4gIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG4gIFxuICBwYXJlbnRoZXNpemVkRXhwcmVzc2lvbiAgOjo9ICAnKCcgZXhwcmVzc2lvbiAnKSdcblxuKi9cbiJdfQ==