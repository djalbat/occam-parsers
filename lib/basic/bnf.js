'use strict';

var bnf = 'basicName ::= <NO_WHITESPACE>"blah" ;';

module.exports = bnf;

/*

  expression    ::= expression_ expression~

                  | expression_

                  ;

  expression_   ::= "(" expression ")"

                  | term

                  ;

  expression~   ::= operator expression expression~? ;

  operator      ::= "+"

                  | "-"

                  | "/"

                  | "*"

                  ;

  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ibmYuanMiXSwibmFtZXMiOlsiYm5mIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsNkNBQU47O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJGLEdBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gYGJhc2ljTmFtZSA6Oj0gPE5PX1dISVRFU1BBQ0U+XCJibGFoXCIgO2A7XG5cbm1vZHVsZS5leHBvcnRzID0gYm5mO1xuXG4vKlxuXG4gIGV4cHJlc3Npb24gICAgOjo9IGV4cHJlc3Npb25fIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIHwgZXhwcmVzc2lvbl9cblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIGV4cHJlc3Npb25fICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICBleHByZXNzaW9ufiAgIDo6PSBvcGVyYXRvciBleHByZXNzaW9uIGV4cHJlc3Npb25+PyA7XG5cbiAgb3BlcmF0b3IgICAgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIi1cIlxuXG4gICAgICAgICAgICAgICAgICB8IFwiL1wiXG5cbiAgICAgICAgICAgICAgICAgIHwgXCIqXCJcblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgO1xuXG4gIG5hdHVyYWxOdW1iZXIgOjo9IC9cXGQrLyA7XG5cbiAqL1xuIl19