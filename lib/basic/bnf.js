"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var bnf = '\n\n  expression  ::=  term... "." ;\n\n        term  ::=  "1"\n        \n                   (\n        \n                     ( "+" "2" "/" )           (4)\n                     \n                     |\n\n                     "+"                       (0)\n                     \n                   ) \n                   \n                   term\n\n                |  "2" "/" "3"                 (1)\n\n                |  "3"                         (3)\n\n                ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgIHRlcm0gIDo6PSAgXCIxXCJcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgKFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICggXCIrXCIgXCIyXCIgXCIvXCIgKSAgICAgICAgICAgKDQpXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIHxcblxuICAgICAgICAgICAgICAgICAgICAgXCIrXCIgICAgICAgICAgICAgICAgICAgICAgICgwKVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB0ZXJtXG5cbiAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICAgICAgKDEpXG5cbiAgICAgICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgICAgICAgICAoMylcblxuICAgICAgICAgICAgICAgIDtcbiAgICAgIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNEJBOzs7ZUFBQTs7O0FBMUJBLElBQU1BLE1BQU87SUEwQmIsV0FBZUEifQ==