'use strict';

var bnf = 'basicName ::= <NO_WHITESPACE>"blah"+ ;';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9iYXNpYy9ibmYuanMiXSwibmFtZXMiOlsiYm5mIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsOENBQU47O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJGLEdBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYm5mID0gYGJhc2ljTmFtZSA6Oj0gPE5PX1dISVRFU1BBQ0U+XCJibGFoXCIrIDtgO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJuZjtcblxuLypcblxuICBleHByZXNzaW9uICAgIDo6PSBleHByZXNzaW9uXyBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICB8IGV4cHJlc3Npb25fXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICBleHByZXNzaW9uXyAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgZXhwcmVzc2lvbn4gICA6Oj0gb3BlcmF0b3IgZXhwcmVzc2lvbiBleHByZXNzaW9ufj8gO1xuXG4gIG9wZXJhdG9yICAgICAgOjo9IFwiK1wiXG5cbiAgICAgICAgICAgICAgICAgIHwgXCItXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIi9cIlxuXG4gICAgICAgICAgICAgICAgICB8IFwiKlwiXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgIDo6PSBuYXR1cmFsTnVtYmVyIDtcblxuICBuYXR1cmFsTnVtYmVyIDo6PSAvXFxkKy8gO1xuXG4gKi9cbiJdfQ==