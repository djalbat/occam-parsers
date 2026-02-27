"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BasicParser;
    }
});
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
const _parser = /*#__PURE__*/ _interop_require_default(require("../common/parser"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BasicParser extends _parser.default {
    static bnf = _bnf.default;
    static fromNothing() {
        return _parser.default.fromNothing(BasicParser);
    }
    static fromBNF(bnf) {
        return _parser.default.fromBNF(BasicParser, bnf);
    }
    static fromRules(rules) {
        return _parser.default.fromRules(BasicParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpYy9wYXJzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBibmYgZnJvbSBcIi4vYm5mXCI7XG5pbXBvcnQgQ29tbW9uUGFyc2VyIGZyb20gXCIuLi9jb21tb24vcGFyc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2ljUGFyc2VyIGV4dGVuZHMgQ29tbW9uUGFyc2VyIHtcbiAgc3RhdGljIGJuZiA9IGJuZjtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbU5vdGhpbmcoQmFzaWNQYXJzZXIpOyB9XG5cbiAgc3RhdGljIGZyb21CTkYoYm5mKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbUJORihCYXNpY1BhcnNlciwgYm5mKTsgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHsgcmV0dXJuIENvbW1vblBhcnNlci5mcm9tUnVsZXMoQmFzaWNQYXJzZXIsIHJ1bGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIkJhc2ljUGFyc2VyIiwiQ29tbW9uUGFyc2VyIiwiYm5mIiwiZnJvbU5vdGhpbmciLCJmcm9tQk5GIiwiZnJvbVJ1bGVzIiwicnVsZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUtBOzs7ZUFBcUJBOzs7NERBSEw7K0RBQ1M7Ozs7OztBQUVWLE1BQU1BLG9CQUFvQkMsZUFBWTtJQUNuRCxPQUFPQyxNQUFNQSxZQUFHLENBQUM7SUFFakIsT0FBT0MsY0FBYztRQUFFLE9BQU9GLGVBQVksQ0FBQ0UsV0FBVyxDQUFDSDtJQUFjO0lBRXJFLE9BQU9JLFFBQVFGLEdBQUcsRUFBRTtRQUFFLE9BQU9ELGVBQVksQ0FBQ0csT0FBTyxDQUFDSixhQUFhRTtJQUFNO0lBRXJFLE9BQU9HLFVBQVVDLEtBQUssRUFBRTtRQUFFLE9BQU9MLGVBQVksQ0FBQ0ksU0FBUyxDQUFDTCxhQUFhTTtJQUFRO0FBQy9FIn0=