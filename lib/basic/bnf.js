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
var bnf = '\n\n    term  ::=  "1" "+" "2" "/" term    (2) \n    \n            |  "3"                     (1)\n            \n            |  "1" "+" term            (1)\n    \n            |  "2" "/" "3"             (2)\n    \n            ;\n  \n';
var _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9ibmYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGJuZiA9IGBcblxuICAgIHRlcm0gIDo6PSAgXCIxXCIgXCIrXCIgXCIyXCIgXCIvXCIgdGVybSAgICAoMikgXG4gICAgXG4gICAgICAgICAgICB8ICBcIjNcIiAgICAgICAgICAgICAgICAgICAgICgxKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB8ICBcIjFcIiBcIitcIiB0ZXJtICAgICAgICAgICAgKDEpXG4gICAgXG4gICAgICAgICAgICB8ICBcIjJcIiBcIi9cIiBcIjNcIiAgICAgICAgICAgICAoMilcbiAgICBcbiAgICAgICAgICAgIDtcbiAgXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBibmY7XG4iXSwibmFtZXMiOlsiYm5mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7QUFkQSxJQUFNQSxNQUFPO0lBY2IsV0FBZUEifQ==