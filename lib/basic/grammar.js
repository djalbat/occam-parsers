'use strict';

var grammar = '\n\n constructor     ::= constructorName\n\n constructorName ::= /w+/\n \n';

module.exports = grammar;

/*



 A ::= B | C

 B ::= A "a" | C "b"

 C ::= C | D

 D ::= A | B "c"

 E ::= B | E | "d"

 F ::= "e"




 expression               ::=  "(" expression ")"

 | expression operator expression

 | term

 operator                 ::=  "+" | "-" | "/" | "*"

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/


 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxzRkFBTjs7QUFRQUMsT0FBT0MsT0FBUCxHQUFpQkYsT0FBakI7O0FBRUEiLCJmaWxlIjoiZ3JhbW1hci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3JhbW1hciA9IGBcblxuIGNvbnN0cnVjdG9yICAgICA6Oj0gY29uc3RydWN0b3JOYW1lXG5cbiBjb25zdHJ1Y3Rvck5hbWUgOjo9IC9cXHcrL1xuIFxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBncmFtbWFyO1xuXG4vKlxuXG5cblxuIEEgOjo9IEIgfCBDXG5cbiBCIDo6PSBBIFwiYVwiIHwgQyBcImJcIlxuXG4gQyA6Oj0gQyB8IERcblxuIEQgOjo9IEEgfCBCIFwiY1wiXG5cbiBFIDo6PSBCIHwgRSB8IFwiZFwiXG5cbiBGIDo6PSBcImVcIlxuXG5cblxuXG4gZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gfCBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuIHwgdGVybVxuXG4gb3BlcmF0b3IgICAgICAgICAgICAgICAgIDo6PSAgXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCJcblxuIHRlcm0gICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hdHVyYWxOdW1iZXJcblxuIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG5cblxuICovIl19