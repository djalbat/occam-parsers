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
var bnf = '\n  \n    S   ::= A... <END_OF_LINE> ;\n    \n    A   ::= A_ A~*\n    \n          | B_ B~* A~B\n    \n          ;\n    \n    B   ::= B_ B~*\n    \n          | A_ A~* B~A\n    \n          ;\n    \n    B_  ::= "d" ;\n    \n    A_  ::= "e" ;\n    \n    B~B ::= "f" ;\n    \n    A~B ::= "g" ;\n    \n    B~A ::= "h" ;\n    \n    B~  ::= B~B\n    \n          | A~B A~* B~A\n    \n          ;\n    \n    A~  ::= B~A B~* A~B ;\n\n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Jhc2ljL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuICBcbiAgICBTICAgOjo9IEEuLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgXG4gICAgQSAgIDo6PSBBXyBBfipcbiAgICBcbiAgICAgICAgICB8IEJfIEJ+KiBBfkJcbiAgICBcbiAgICAgICAgICA7XG4gICAgXG4gICAgQiAgIDo6PSBCXyBCfipcbiAgICBcbiAgICAgICAgICB8IEFfIEF+KiBCfkFcbiAgICBcbiAgICAgICAgICA7XG4gICAgXG4gICAgQl8gIDo6PSBcImRcIiA7XG4gICAgXG4gICAgQV8gIDo6PSBcImVcIiA7XG4gICAgXG4gICAgQn5CIDo6PSBcImZcIiA7XG4gICAgXG4gICAgQX5CIDo6PSBcImdcIiA7XG4gICAgXG4gICAgQn5BIDo6PSBcImhcIiA7XG4gICAgXG4gICAgQn4gIDo6PSBCfkJcbiAgICBcbiAgICAgICAgICB8IEF+QiBBfiogQn5BXG4gICAgXG4gICAgICAgICAgO1xuICAgIFxuICAgIEF+ICA6Oj0gQn5BIEJ+KiBBfkIgO1xuXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQ0E7OztlQUFBOzs7QUFwQ0EsSUFBTUEsTUFBTztJQW9DYixXQUFlQSJ9