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
var bnf = '\n\n        expression  ::=  term... "." ;\n\n              term  ::=  "1" "+" "2" "/" term       (3)\n\n                      |  "1" "+" term               (0)\n\n                      |  "2" "/" "3"                (1)\n\n                      |  "3"                        (2)\n\n                      ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gXCIuXCIgO1xuXG4gICAgICAgICAgICAgIHRlcm0gIDo6PSAgXCIxXCIgXCIrXCIgXCIyXCIgXCIvXCIgdGVybSAgICAgICAoMylcblxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiMVwiIFwiK1wiIHRlcm0gICAgICAgICAgICAgICAoMClcblxuICAgICAgICAgICAgICAgICAgICAgIHwgIFwiMlwiIFwiL1wiIFwiM1wiICAgICAgICAgICAgICAgICgxKVxuXG4gICAgICAgICAgICAgICAgICAgICAgfCAgXCIzXCIgICAgICAgICAgICAgICAgICAgICAgICAoMilcblxuICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0JBOzs7ZUFBQTs7O0FBaEJBLElBQU1BLE1BQU87SUFnQmIsV0FBZUEifQ==