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
var bnf = '\n\n\n      \n     expression ::= term ;\n\n          term  ::=  "2" "/" term (4) \n                            \n                  |  "2" "*" term (3) \n                            \n                  |  "1" "+" term (2) \n                            \n                  |  "1" "-" term (1) \n                            \n                  |  number            \n      \n                  ;\n                  \n         number ::= /\\d+/ ;\n                  \n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuXG4gICAgICBcbiAgICAgZXhwcmVzc2lvbiA6Oj0gdGVybSA7XG5cbiAgICAgICAgICB0ZXJtICA6Oj0gIFwiMlwiIFwiL1wiIHRlcm0gKDQpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfCAgXCIyXCIgXCIqXCIgdGVybSAoMykgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB8ICBcIjFcIiBcIitcIiB0ZXJtICgyKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHwgIFwiMVwiIFwiLVwiIHRlcm0gKDEpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfCAgbnVtYmVyICAgICAgICAgICAgXG4gICAgICBcbiAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgbnVtYmVyIDo6PSAvXFxcXGQrLyA7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgIFxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUJBOzs7ZUFBQTs7O0FBdkJBLElBQU1BLE1BQU87SUF1QmIsV0FBZUEifQ==