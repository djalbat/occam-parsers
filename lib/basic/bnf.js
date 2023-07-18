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
var bnf = '\n      \n      expression ::= term... "." ;\n    \n      term       ::= /\\d+/ term~term* ;\n      \n      term~term  ::= "+" term (2) ;\n      \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcbiAgICAgIFxuICAgICAgZXhwcmVzc2lvbiA6Oj0gdGVybS4uLiBcIi5cIiA7XG4gICAgXG4gICAgICB0ZXJtICAgICAgIDo6PSAvXFxcXGQrLyB0ZXJtfnRlcm0qIDtcbiAgICAgIFxuICAgICAgdGVybX50ZXJtICA6Oj0gXCIrXCIgdGVybSAoMikgO1xuICAgICAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztBQVZBLElBQU1BLE1BQU87SUFVYixXQUFlQSJ9