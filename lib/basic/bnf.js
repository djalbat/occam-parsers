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
var bnf = '\n\n        term  ::=  "1"\n\n                   (\n\n                     ( "+" "2" "/" )   (4)\n\n                     |\n\n                     "+"               (0)\n\n                   )\n\n                   term\n\n                |  "2" "/" "3"         (1)\n\n                |  "3"                 (3)\n\n                ;\n   \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICB0ZXJtICA6Oj0gIFwiMVwiXG5cbiAgICAgICAgICAgICAgICAgICAoXG5cbiAgICAgICAgICAgICAgICAgICAgICggXCIrXCIgXCIyXCIgXCIvXCIgKSAgICg0KVxuXG4gICAgICAgICAgICAgICAgICAgICB8XG5cbiAgICAgICAgICAgICAgICAgICAgIFwiK1wiICAgICAgICAgICAgICAgKDApXG5cbiAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICB0ZXJtXG5cbiAgICAgICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICgxKVxuXG4gICAgICAgICAgICAgICAgfCAgXCIzXCIgICAgICAgICAgICAgICAgICgzKVxuXG4gICAgICAgICAgICAgICAgO1xuICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7QUF4QkEsSUFBTUEsTUFBTztJQXdCYixXQUFlQSJ9