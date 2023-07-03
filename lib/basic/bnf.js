"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" /*

        term  ::=  "1" "+" "2" "/" term   (4)

                |  "1" "+" term           (0)

                |  "2" "/" "3"            (1)

                |  "3"                    (3)

                ;


  expression  ::=  term... "." ;

        term  ::=  "1"

                   (

                     ( "+" "2" "/" )   (4)

                     |

                     "+"               (0)

                   )

                   term

                |  "2" "/" "3"         (1)

                |  "3"                 (3)

                ;

*/ , {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var bnf = '\n\n   S ::= AB... "b" ;\n  \n  AB ::= "a" "b"? \n  \n       | "a"\n       \n       ; \n  \n   \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgUyA6Oj0gQUIuLi4gXCJiXCIgO1xuICBcbiAgQUIgOjo9IFwiYVwiIFwiYlwiPyBcbiAgXG4gICAgICAgfCBcImFcIlxuICAgICAgIFxuICAgICAgIDsgXG4gIFxuICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG5cbi8qXG5cbiAgICAgICAgdGVybSAgOjo9ICBcIjFcIiBcIitcIiBcIjJcIiBcIi9cIiB0ZXJtICAgKDQpXG5cbiAgICAgICAgICAgICAgICB8ICBcIjFcIiBcIitcIiB0ZXJtICAgICAgICAgICAoMClcblxuICAgICAgICAgICAgICAgIHwgIFwiMlwiIFwiL1wiIFwiM1wiICAgICAgICAgICAgKDEpXG5cbiAgICAgICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgICAgKDMpXG5cbiAgICAgICAgICAgICAgICA7XG5cblxuICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgIHRlcm0gIDo6PSAgXCIxXCJcblxuICAgICAgICAgICAgICAgICAgIChcblxuICAgICAgICAgICAgICAgICAgICAgKCBcIitcIiBcIjJcIiBcIi9cIiApICAgKDQpXG5cbiAgICAgICAgICAgICAgICAgICAgIHxcblxuICAgICAgICAgICAgICAgICAgICAgXCIrXCIgICAgICAgICAgICAgICAoMClcblxuICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgIHRlcm1cblxuICAgICAgICAgICAgICAgIHwgIFwiMlwiIFwiL1wiIFwiM1wiICAgICAgICAgKDEpXG5cbiAgICAgICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgKDMpXG5cbiAgICAgICAgICAgICAgICA7XG5cbiovIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUEsVUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7OztlQXJDQTs7O0FBYkEsSUFBTUEsTUFBTztJQWFiLFdBQWVBIn0=