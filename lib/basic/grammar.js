'use strict';

var grammar = '\n\n  expression    ::= "(" expression ")" expressionRR\n\n                  | term expressionRR \n                  \n                  ;\n\n  operator      ::= "+"\n\n                  | "-"\n\n                  | "/"\n\n                  | "*" \n                  \n                  ;\n\n  term          ::= naturalNumber ;\n\n  naturalNumber ::= /d+/ ;\n\n  expressionRR  ::= operator expression expressionRR\n\n                  | \u03B5 \n                  \n                  ;\n\n';

module.exports = grammar;

/*

 expression               ::=  expression operator expression

                            |  "(" expression ")"

                            |  term

                            ;

 operator                 ::=  "+" | "-" | "/" | "*" ;

 term                     ::=  naturalNumber ;

 naturalNumber            ::=  /\\d+/ ;

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ncmFtbWFyLmpzIl0sIm5hbWVzIjpbImdyYW1tYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxxZkFBTjs7QUE4QkFDLE9BQU9DLE9BQVAsR0FBaUJGLE9BQWpCOztBQUVBIiwiZmlsZSI6ImdyYW1tYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdyYW1tYXIgPSBgXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiBleHByZXNzaW9uUlJcblxuICAgICAgICAgICAgICAgICAgfCB0ZXJtIGV4cHJlc3Npb25SUiBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgOjo9IFwiK1wiXG5cbiAgICAgICAgICAgICAgICAgIHwgXCItXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIi9cIlxuXG4gICAgICAgICAgICAgICAgICB8IFwiKlwiIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICA6Oj0gbmF0dXJhbE51bWJlciA7XG5cbiAgbmF0dXJhbE51bWJlciA6Oj0gL1xcZCsvIDtcblxuICBleHByZXNzaW9uUlIgIDo6PSBvcGVyYXRvciBleHByZXNzaW9uIGV4cHJlc3Npb25SUlxuXG4gICAgICAgICAgICAgICAgICB8IM61IFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA7XG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JhbW1hcjtcblxuLypcblxuIGV4cHJlc3Npb24gICAgICAgICAgICAgICA6Oj0gIGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gb3BlcmF0b3IgICAgICAgICAgICAgICAgIDo6PSAgXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gdGVybSAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmF0dXJhbE51bWJlciA7XG5cbiBuYXR1cmFsTnVtYmVyICAgICAgICAgICAgOjo9ICAvXFxcXGQrLyA7XG5cbiAqLyJdfQ==