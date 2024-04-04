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
var bnf = '\n\n    expressions  ::=  expression+ ;\n\n    expression   ::=  <START_OF_CONTENT> term... "." ;\n    \n    term         ::=  term_ term~* ;\n    \n    operator     ::=  "+"\n    \n                   |  "-"\n    \n                   |  "*"\n    \n                   ;\n    \n    number       ::=  /\\d+/ ;\n    \n    term_        ::=  "(" term ")"\n    \n                   |  number\n    \n                   ;\n    \n    term~term    ::=  operator term ;\n    \n    term~        ::=  term~term ;\n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIGV4cHJlc3Npb25zICA6Oj0gIGV4cHJlc3Npb24rIDtcblxuICAgIGV4cHJlc3Npb24gICA6Oj0gIDxTVEFSVF9PRl9DT05URU5UPiB0ZXJtLi4uIFwiLlwiIDtcbiAgICBcbiAgICB0ZXJtICAgICAgICAgOjo9ICB0ZXJtXyB0ZXJtfiogO1xuICAgIFxuICAgIG9wZXJhdG9yICAgICA6Oj0gIFwiK1wiXG4gICAgXG4gICAgICAgICAgICAgICAgICAgfCAgXCItXCJcbiAgICBcbiAgICAgICAgICAgICAgICAgICB8ICBcIipcIlxuICAgIFxuICAgICAgICAgICAgICAgICAgIDtcbiAgICBcbiAgICBudW1iZXIgICAgICAgOjo9ICAvXFxcXGQrLyA7XG4gICAgXG4gICAgdGVybV8gICAgICAgIDo6PSAgXCIoXCIgdGVybSBcIilcIlxuICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIG51bWJlclxuICAgIFxuICAgICAgICAgICAgICAgICAgIDtcbiAgICBcbiAgICB0ZXJtfnRlcm0gICAgOjo9ICBvcGVyYXRvciB0ZXJtIDtcbiAgICBcbiAgICB0ZXJtfiAgICAgICAgOjo9ICB0ZXJtfnRlcm0gO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQ0E7OztlQUFBOzs7QUE5QkEsSUFBTUEsTUFBTztJQThCYixXQUFlQSJ9