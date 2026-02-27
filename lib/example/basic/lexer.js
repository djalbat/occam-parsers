"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BasicLexer;
    }
});
const _occamlexers = require("occam-lexers");
const _entries = /*#__PURE__*/ _interop_require_default(require("./entries"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BasicLexer extends _occamlexers.BasicLexer {
    static entries = _entries.default;
    static EndOfLineToken = _occamlexers.EndOfLineSignificantToken;
    static fromNothing() {
        return _occamlexers.CommonLexer.fromNothing(BasicLexer);
    }
    static fromRules(rules) {
        return _occamlexers.CommonLexer.fromRules(BasicLexer, rules);
    }
    static fromEntries(entries) {
        return _occamlexers.CommonLexer.fromEntries(BasicLexer, entries);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Jhc2ljL2xleGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb21tb25MZXhlciwgQmFzaWNMZXhlciBhcyBCYXNpY0xleGVyQmFzZSwgRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcblxuaW1wb3J0IGVudHJpZXMgZnJvbSBcIi4vZW50cmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY0xleGVyIGV4dGVuZHMgQmFzaWNMZXhlckJhc2Uge1xuICBzdGF0aWMgZW50cmllcyA9IGVudHJpZXM7XG5cbiAgc3RhdGljIEVuZE9mTGluZVRva2VuID0gRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbjsgLy8vXG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uTGV4ZXIuZnJvbU5vdGhpbmcoQmFzaWNMZXhlcik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25MZXhlci5mcm9tUnVsZXMoQmFzaWNMZXhlciwgcnVsZXMpOyB9XG5cbiAgc3RhdGljIGZyb21FbnRyaWVzKGVudHJpZXMpIHsgcmV0dXJuIENvbW1vbkxleGVyLmZyb21FbnRyaWVzKEJhc2ljTGV4ZXIsIGVudHJpZXMpOyB9XG59XG4iXSwibmFtZXMiOlsiQmFzaWNMZXhlciIsIkJhc2ljTGV4ZXJCYXNlIiwiZW50cmllcyIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lU2lnbmlmaWNhbnRUb2tlbiIsImZyb21Ob3RoaW5nIiwiQ29tbW9uTGV4ZXIiLCJmcm9tUnVsZXMiLCJydWxlcyIsImZyb21FbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7OzZCQUpnRTtnRUFFakU7Ozs7OztBQUVMLE1BQU1BLG1CQUFtQkMsdUJBQWM7SUFDcEQsT0FBT0MsVUFBVUEsZ0JBQU8sQ0FBQztJQUV6QixPQUFPQyxpQkFBaUJDLHNDQUF5QixDQUFDO0lBRWxELE9BQU9DLGNBQWM7UUFBRSxPQUFPQyx3QkFBVyxDQUFDRCxXQUFXLENBQUNMO0lBQWE7SUFFbkUsT0FBT08sVUFBVUMsS0FBSyxFQUFFO1FBQUUsT0FBT0Ysd0JBQVcsQ0FBQ0MsU0FBUyxDQUFDUCxZQUFZUTtJQUFRO0lBRTNFLE9BQU9DLFlBQVlQLE9BQU8sRUFBRTtRQUFFLE9BQU9JLHdCQUFXLENBQUNHLFdBQVcsQ0FBQ1QsWUFBWUU7SUFBVTtBQUNyRiJ9