"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" /*

        term  ::=  "1"

                   (

                     ( "+" "2" "/" )          (3)

                     |

                     "+"                      (0)

                   )

                   term

                |  "2" "/" "3"                (1)

                |  "3"                        (2)

                ;


    expression ::= term... "." ;

    term       ::= term_ term~* ;

    number     ::= /\d+/ ;

    term_      ::= "(" term ")"

                 | number

                 ;

    term~term  ::= ( "/" (1) | "*" (2) | "+" (3) | "-" (4) ) term ;

    term~      ::= term~term ;
*/ , {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var bnf = '\n\n  expression  ::=  term... "." ;\n\n        term  ::=  "1"\n        \n                   (\n        \n                     "+"                       (0)\n                     \n                     |\n\n                     ( "+" "2" "/" )           (3)\n                     \n                   ) \n                   \n                   term\n\n                |  "2" "/" "3"                 (1)\n\n                |  "3"                         (4)\n\n                ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgIHRlcm0gIDo6PSAgXCIxXCJcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgKFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFwiK1wiICAgICAgICAgICAgICAgICAgICAgICAoMClcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgfFxuXG4gICAgICAgICAgICAgICAgICAgICAoIFwiK1wiIFwiMlwiIFwiL1wiICkgICAgICAgICAgICgzKVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB0ZXJtXG5cbiAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICAgICAgKDEpXG5cbiAgICAgICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgICAgICAgICAoNClcblxuICAgICAgICAgICAgICAgIDtcbiAgICAgIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuXG4vKlxuXG4gICAgICAgIHRlcm0gIDo6PSAgXCIxXCJcblxuICAgICAgICAgICAgICAgICAgIChcblxuICAgICAgICAgICAgICAgICAgICAgKCBcIitcIiBcIjJcIiBcIi9cIiApICAgICAgICAgICgzKVxuXG4gICAgICAgICAgICAgICAgICAgICB8XG5cbiAgICAgICAgICAgICAgICAgICAgIFwiK1wiICAgICAgICAgICAgICAgICAgICAgICgwKVxuXG4gICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgdGVybVxuXG4gICAgICAgICAgICAgICAgfCAgXCIyXCIgXCIvXCIgXCIzXCIgICAgICAgICAgICAgICAgKDEpXG5cbiAgICAgICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgICAgICAgICgyKVxuXG4gICAgICAgICAgICAgICAgO1xuXG5cbiAgICBleHByZXNzaW9uIDo6PSB0ZXJtLi4uIFwiLlwiIDtcblxuICAgIHRlcm0gICAgICAgOjo9IHRlcm1fIHRlcm1+KiA7XG5cbiAgICBudW1iZXIgICAgIDo6PSAvXFxkKy8gO1xuXG4gICAgdGVybV8gICAgICA6Oj0gXCIoXCIgdGVybSBcIilcIlxuXG4gICAgICAgICAgICAgICAgIHwgbnVtYmVyXG5cbiAgICAgICAgICAgICAgICAgO1xuXG4gICAgdGVybX50ZXJtICA6Oj0gKCBcIi9cIiAoMSkgfCBcIipcIiAoMikgfCBcIitcIiAoMykgfCBcIi1cIiAoNCkgKSB0ZXJtIDtcblxuICAgIHRlcm1+ICAgICAgOjo9IHRlcm1+dGVybSA7XG4qLyJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQSxVQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTs7O2VBeENBOzs7QUExQkEsSUFBTUEsTUFBTztJQTBCYixXQUFlQSJ9