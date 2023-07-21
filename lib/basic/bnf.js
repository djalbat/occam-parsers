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
var bnf = '\n      \n      expression ::= term... "." ;\n    \n      term       ::= "1" term~term* ;\n      \n      term~term  ::= "+" "2"\n      \n                   | "+" "2" \n                   \n                   ;\n                   \n      \n';
var _default = bnf;
'\n\n      expression ::= term... "." ;\n    \n      term       ::= "1" term~term* ;\n      \n      term~term  ::= "+" "2" "."\n      \n                   | "+" "2" \n                   \n                   ;\n\n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcbiAgICAgIFxuICAgICAgZXhwcmVzc2lvbiA6Oj0gdGVybS4uLiBcIi5cIiA7XG4gICAgXG4gICAgICB0ZXJtICAgICAgIDo6PSBcIjFcIiB0ZXJtfnRlcm0qIDtcbiAgICAgIFxuICAgICAgdGVybX50ZXJtICA6Oj0gXCIrXCIgXCIyXCJcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgIHwgXCIrXCIgXCIyXCIgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG5cbmBcblxuICAgICAgZXhwcmVzc2lvbiA6Oj0gdGVybS4uLiBcIi5cIiA7XG4gICAgXG4gICAgICB0ZXJtICAgICAgIDo6PSBcIjFcIiB0ZXJtfnRlcm0qIDtcbiAgICAgIFxuICAgICAgdGVybX50ZXJtICA6Oj0gXCIrXCIgXCIyXCIgXCIuXCJcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgIHwgXCIrXCIgXCIyXCIgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgO1xuXG5gIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7O0FBZkEsSUFBTUEsTUFBTztJQWViLFdBQWVBO0FBRWQifQ==