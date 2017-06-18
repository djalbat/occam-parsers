'use strict';

var grammar = '\n\n A ::= B | C\n\n B ::= A "a" | C "b"\n\n C ::= C | D\n\n D ::= A | B "c"\n\n E ::= B | E | "d"\n\n F ::= "e"\n  \n';

module.exports = grammar;

/*



 expression               ::=  "(" expression ")"

 | expression operator expression

 | term

 operator                 ::=  "+" | "-" | "/" | "*"

 term                     ::=  naturalNumber

 naturalNumber            ::=  /\\d+/


 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxrSUFBTjs7QUFnQkFDLE9BQU9DLE9BQVAsR0FBaUJGLE9BQWpCOztBQUVBIiwiZmlsZSI6ImdyYW1tYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdyYW1tYXIgPSBgXG5cbiBBIDo6PSBCIHwgQ1xuXG4gQiA6Oj0gQSBcImFcIiB8IEMgXCJiXCJcblxuIEMgOjo9IEMgfCBEXG5cbiBEIDo6PSBBIHwgQiBcImNcIlxuXG4gRSA6Oj0gQiB8IEUgfCBcImRcIlxuXG4gRiA6Oj0gXCJlXCJcbiAgXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyYW1tYXI7XG5cbi8qXG5cblxuXG4gZXhwcmVzc2lvbiAgICAgICAgICAgICAgIDo6PSAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gfCBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuIHwgdGVybVxuXG4gb3BlcmF0b3IgICAgICAgICAgICAgICAgIDo6PSAgXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCJcblxuIHRlcm0gICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hdHVyYWxOdW1iZXJcblxuIG5hdHVyYWxOdW1iZXIgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvXG5cblxuICovIl19