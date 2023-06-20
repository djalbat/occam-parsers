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
var bnf = '\n\n        expression  ::=  term... "." ;\n\n              term  ::=  "1"\n\n                         (\n\n                           ( "+" "2" "/" )          (3)\n\n                           |\n\n                           "+"                      (0)\n\n                         )\n\n                         term\n\n                      |  "2" "/" "3"                (1)\n\n                      |  "3"                        (2)\n\n                      ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgICAgICAgIHRlcm0gIDo6PSAgXCIxXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgIChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBcIitcIiBcIjJcIiBcIi9cIiApICAgICAgICAgICgzKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiICAgICAgICAgICAgICAgICAgICAgICgwKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCIyXCIgXCIvXCIgXCIzXCIgICAgICAgICAgICAgICAgKDEpXG5cbiAgICAgICAgICAgICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgICAgICAgICgyKVxuXG4gICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0QkE7OztlQUFBOzs7QUExQkEsSUFBTUEsTUFBTztJQTBCYixXQUFlQSJ9