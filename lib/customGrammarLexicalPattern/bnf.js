"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var bnf = "\n\n\n    document       ::=  lexicalPattern ( verticalSpace | error )* | ( verticalSpace | error )+ ;\n\n\n    lexicalPattern ::=  [unassigned]+ ;\n\n\n    verticalSpace  ::=  <END_OF_LINE>+ ;\n\n\n    error          ::=  . ;\n\n\n";
var _default = bnf;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxHQUFHLDZPQUFUO2VBaUJlQSxHIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuXG4gICAgZG9jdW1lbnQgICAgICAgOjo9ICBsZXhpY2FsUGF0dGVybiAoIHZlcnRpY2FsU3BhY2UgfCBlcnJvciApKiB8ICggdmVydGljYWxTcGFjZSB8IGVycm9yICkrIDtcblxuXG4gICAgbGV4aWNhbFBhdHRlcm4gOjo9ICBbdW5hc3NpZ25lZF0rIDtcblxuXG4gICAgdmVydGljYWxTcGFjZSAgOjo9ICA8RU5EX09GX0xJTkU+KyA7XG5cblxuICAgIGVycm9yICAgICAgICAgIDo6PSAgLiA7XG5cblxuYDtcblxuZXhwb3J0IGRlZmF1bHQgYm5mO1xuIl19