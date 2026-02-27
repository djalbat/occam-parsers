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
const _index = require("../../index");
const _bnf = /*#__PURE__*/ _interop_require_default(require("./bnf"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BasicParser extends _index.BasicParser {
    static bnf = _bnf.default;
    static fromNothing() {
        return _index.CommonParser.fromNothing(BasicParser);
    }
    static fromBNF(bnf) {
        return _index.CommonParser.fromBNF(BasicParser, bnf);
    }
    static fromRules(rules) {
        return _index.CommonParser.fromRules(BasicParser, rules);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Jhc2ljL3BhcnNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29tbW9uUGFyc2VyLCBCYXNpY1BhcnNlciBhcyBCYXNpY1BhcnNlckJhc2UgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgYm5mIGZyb20gXCIuL2JuZlwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNpY1BhcnNlciBleHRlbmRzIEJhc2ljUGFyc2VyQmFzZSB7XG4gIHN0YXRpYyBibmYgPSBibmY7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21Ob3RoaW5nKEJhc2ljUGFyc2VyKTsgfVxuXG4gIHN0YXRpYyBmcm9tQk5GKGJuZikgeyByZXR1cm4gQ29tbW9uUGFyc2VyLmZyb21CTkYoQmFzaWNQYXJzZXIsIGJuZik7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVzKHJ1bGVzKSB7IHJldHVybiBDb21tb25QYXJzZXIuZnJvbVJ1bGVzKEJhc2ljUGFyc2VyLCBydWxlcyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJCYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyQmFzZSIsImJuZiIsImZyb21Ob3RoaW5nIiwiQ29tbW9uUGFyc2VyIiwiZnJvbUJORiIsImZyb21SdWxlcyIsInJ1bGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VCQUp3Qzs0REFFN0M7Ozs7OztBQUVELE1BQU1BLG9CQUFvQkMsa0JBQWU7SUFDdEQsT0FBT0MsTUFBTUEsWUFBRyxDQUFDO0lBRWpCLE9BQU9DLGNBQWM7UUFBRSxPQUFPQyxtQkFBWSxDQUFDRCxXQUFXLENBQUNIO0lBQWM7SUFFckUsT0FBT0ssUUFBUUgsR0FBRyxFQUFFO1FBQUUsT0FBT0UsbUJBQVksQ0FBQ0MsT0FBTyxDQUFDTCxhQUFhRTtJQUFNO0lBRXJFLE9BQU9JLFVBQVVDLEtBQUssRUFBRTtRQUFFLE9BQU9ILG1CQUFZLENBQUNFLFNBQVMsQ0FBQ04sYUFBYU87SUFBUTtBQUMvRSJ9