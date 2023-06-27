"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" /*

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
var bnf = '\n\n  expression  ::=  term... "." ;\n\n        term  ::=  "1" "+" "2" "/" term   (4)\n                     \n                |  "1" "+" term           (0)\n                     \n                |  "2" "/" "3"            (1)\n\n                |  "3"                    (3)\n\n                ;\n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgIHRlcm0gIDo6PSAgXCIxXCIgXCIrXCIgXCIyXCIgXCIvXCIgdGVybSAgICg0KVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfCAgXCIxXCIgXCIrXCIgdGVybSAgICAgICAgICAgKDApXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICgxKVxuXG4gICAgICAgICAgICAgICAgfCAgXCIzXCIgICAgICAgICAgICAgICAgICAgICgzKVxuXG4gICAgICAgICAgICAgICAgO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG5cbi8qXG5cbiAgZXhwcmVzc2lvbiAgOjo9ICB0ZXJtLi4uIFwiLlwiIDtcblxuICAgICAgICB0ZXJtICA6Oj0gIFwiMVwiXG5cbiAgICAgICAgICAgICAgICAgICAoXG5cbiAgICAgICAgICAgICAgICAgICAgICggXCIrXCIgXCIyXCIgXCIvXCIgKSAgICg0KVxuXG4gICAgICAgICAgICAgICAgICAgICB8XG5cbiAgICAgICAgICAgICAgICAgICAgIFwiK1wiICAgICAgICAgICAgICAgKDApXG5cbiAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICB0ZXJtXG5cbiAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICgxKVxuXG4gICAgICAgICAgICAgICAgfCAgXCIzXCIgICAgICAgICAgICAgICAgICgzKVxuXG4gICAgICAgICAgICAgICAgO1xuXG4qLyJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQSxVQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7OztlQTFCQTs7O0FBaEJBLElBQU1BLE1BQU87SUFnQmIsV0FBZUEifQ==