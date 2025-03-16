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
var bnf = '\n  \n  S   ::= F... <END_OF_LINE> ;\n  \n  A   ::= A_ A~*\n  \n        | F_ F~* E~F E~* A~E\n  \n        ;\n  \n  E   ::= F_ F~* E~F\n  \n        | A_ A~* F~A F~* E~F\n  \n        ;\n  \n  T   ::= "n" ;\n  \n  F   ::= F_ F~*\n  \n        | A_ A~* F~A\n  \n        ;\n  \n  F_  ::= "(" A ")" ;\n  \n  A_  ::= T ;\n  \n  F~A ::= "+" A ;\n  \n  A~E ::= ε ;\n  \n  E~F ::= ε ;\n  \n  F~  ::= E~F E~* A~E A~* F~A ;\n  \n  A~  ::= F~A F~* E~F E~* A~E ;\n  \n  E~  ::= A~E A~* F~A F~* E~F ;\n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Jhc2ljL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuICBcbiAgUyAgIDo6PSBGLi4uIDxFTkRfT0ZfTElORT4gO1xuICBcbiAgQSAgIDo6PSBBXyBBfipcbiAgXG4gICAgICAgIHwgRl8gRn4qIEV+RiBFfiogQX5FXG4gIFxuICAgICAgICA7XG4gIFxuICBFICAgOjo9IEZfIEZ+KiBFfkZcbiAgXG4gICAgICAgIHwgQV8gQX4qIEZ+QSBGfiogRX5GXG4gIFxuICAgICAgICA7XG4gIFxuICBUICAgOjo9IFwiblwiIDtcbiAgXG4gIEYgICA6Oj0gRl8gRn4qXG4gIFxuICAgICAgICB8IEFfIEF+KiBGfkFcbiAgXG4gICAgICAgIDtcbiAgXG4gIEZfICA6Oj0gXCIoXCIgQSBcIilcIiA7XG4gIFxuICBBXyAgOjo9IFQgO1xuICBcbiAgRn5BIDo6PSBcIitcIiBBIDtcbiAgXG4gIEF+RSA6Oj0gzrUgO1xuICBcbiAgRX5GIDo6PSDOtSA7XG4gIFxuICBGfiAgOjo9IEV+RiBFfiogQX5FIEF+KiBGfkEgO1xuICBcbiAgQX4gIDo6PSBGfkEgRn4qIEV+RiBFfiogQX5FIDtcbiAgXG4gIEV+ICA6Oj0gQX5FIEF+KiBGfkEgRn4qIEV+RiA7XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRDQTs7O2VBQUE7OztBQTFDQSxJQUFNQSxNQUFPO0lBMENiLFdBQWVBIn0=