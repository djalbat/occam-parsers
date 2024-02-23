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
var bnf = '\n\n      expression   ::= expression_ operator expression expression~*\n\n                     | expression_\n\n                     ;\n\n      operator!    ::= "+"\n\n                     | "-"\n\n                     | "/"\n\n                     | "*"\n\n                     ;\n\n      term         ::= /\\d+/ ;\n\n      expression_  ::= "(" expression ")"\n\n                     | term\n\n                     ;\n\n      expression~  ::= operator expression ;\n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgICAgZXhwcmVzc2lvbiAgIDo6PSBleHByZXNzaW9uXyBvcGVyYXRvciBleHByZXNzaW9uIGV4cHJlc3Npb25+KlxuXG4gICAgICAgICAgICAgICAgICAgICB8IGV4cHJlc3Npb25fXG5cbiAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgb3BlcmF0b3IhICAgIDo6PSBcIitcIlxuXG4gICAgICAgICAgICAgICAgICAgICB8IFwiLVwiXG5cbiAgICAgICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgICAgICAgfCBcIipcIlxuXG4gICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIHRlcm0gICAgICAgICA6Oj0gL1xcXFxkKy8gO1xuXG4gICAgICBleHByZXNzaW9uXyAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgZXhwcmVzc2lvbn4gIDo6PSBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl0sIm5hbWVzIjpbImJuZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0NBOzs7ZUFBQTs7O0FBOUJBLElBQU1BLE1BQU87SUE4QmIsV0FBZUEifQ==