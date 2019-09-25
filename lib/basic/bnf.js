'use strict';

var bnf = 'basicName ::= ( blah blah ) ;';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ibmYuanMiXSwibmFtZXMiOlsiYm5mIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEscUNBQU47O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJGLEdBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gYGJhc2ljTmFtZSA6Oj0gKCBibGFoIGJsYWggKSA7YDtcblxubW9kdWxlLmV4cG9ydHMgPSBibmY7XG5cbi8qXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gZXhwcmVzc2lvbl8gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCBleHByZXNzaW9uX1xuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgZXhwcmVzc2lvbl8gICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIGV4cHJlc3Npb25+ICAgOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gZXhwcmVzc2lvbn4/IDtcblxuICBvcGVyYXRvciAgICAgIDo6PSBcIitcIlxuXG4gICAgICAgICAgICAgICAgICB8IFwiLVwiXG5cbiAgICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIipcIlxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICA6Oj0gbmF0dXJhbE51bWJlciA7XG5cbiAgbmF0dXJhbE51bWJlciA6Oj0gL1xcZCsvIDtcblxuICovXG4iXX0=