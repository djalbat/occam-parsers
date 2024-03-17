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
var bnf = 'expression ::= term... "." ;\n\nterm       ::= term_ term~* ;\n\noperator   ::= "+"\n\n             | "-"\n\n             | "/"\n\n             | "*"\n\n             ;\n\nnumber     ::= /\\d+/ ;\n\nterm_      ::= "(" term ")"\n\n             | number\n\n             ;\n\nterm~term  ::= operator term ;\n\nterm~      ::= term~term ;\n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBleHByZXNzaW9uIDo6PSB0ZXJtLi4uIFwiLlwiIDtcblxudGVybSAgICAgICA6Oj0gdGVybV8gdGVybX4qIDtcblxub3BlcmF0b3IgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgIHwgXCItXCJcblxuICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgIHwgXCIqXCJcblxuICAgICAgICAgICAgIDtcblxubnVtYmVyICAgICA6Oj0gL1xcXFxkKy8gO1xuXG50ZXJtXyAgICAgIDo6PSBcIihcIiB0ZXJtIFwiKVwiXG5cbiAgICAgICAgICAgICB8IG51bWJlclxuXG4gICAgICAgICAgICAgO1xuXG50ZXJtfnRlcm0gIDo6PSBvcGVyYXRvciB0ZXJtIDtcblxudGVybX4gICAgICA6Oj0gdGVybX50ZXJtIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEJBOzs7ZUFBQTs7O0FBNUJBLElBQU1BLE1BQU87SUE0QmIsV0FBZUEifQ==