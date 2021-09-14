"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _rule1 = _interopRequireDefault(require("../node/rule"));
var _rule2 = _interopRequireDefault(require("../definition/rule"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var RuleRule = /*#__PURE__*/ function(Rule) {
    _inherits(RuleRule, Rule);
    function RuleRule() {
        _classCallCheck(this, RuleRule);
        var ruleDefinition = new _rule2.default(), name = _ruleNames.RuleRuleName, definitions = [
            ruleDefinition
        ], Node1 = _rule1.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleRule).call(this, name, definitions, Node1));
    }
    return RuleRule;
}(_rule.default);
exports.default = RuleRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IFJ1bGVOb2RlIGZyb20gXCIuLi9ub2RlL3J1bGVcIjtcbmltcG9ydCBSdWxlRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9ydWxlXCI7XG5cbmltcG9ydCB7IFJ1bGVSdWxlTmFtZSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcnVsZURlZmluaXRpb24gPSBuZXcgUnVsZURlZmluaXRpb24oKSxcbiAgICAgICAgICBuYW1lID0gUnVsZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgcnVsZURlZmluaXRpb25cbiAgICAgICAgICBdLFxuICAgICAgICAgIE5vZGUgPSBSdWxlTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ0wsR0FBYyxDQUFkLE1BQWM7QUFDUixHQUFvQixDQUFwQixNQUFvQjtBQUVsQixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QixRQUFRO2NBQVIsUUFBUTthQUFSLFFBQVE7OEJBQVIsUUFBUTtRQUV6QixHQUFLLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FOSCxNQUFvQixZQU9yQyxJQUFJLEdBTGUsVUFBYyxlQU1qQyxXQUFXO1lBQ1QsY0FBYztXQUVoQixLQUFJLEdBWk8sTUFBYztnRUFLZCxRQUFRLGFBU25CLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSTs7V0FUWixRQUFRO0VBTlosS0FBUztrQkFNTCxRQUFRIn0=