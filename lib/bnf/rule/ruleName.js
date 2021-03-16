"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _ruleName = _interopRequireDefault(require("../node/ruleName"));
var _name = _interopRequireDefault(require("../definition/name"));
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
var RuleNameRule = function(Rule) {
    _inherits(RuleNameRule, _rule.default);
    function RuleNameRule() {
        _classCallCheck(this, RuleNameRule);
        var nameDefinition = new _name.default(), name = _ruleNames.RuleNameRuleName, definitions = [
            nameDefinition
        ], Node1 = _ruleName.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameRule).call(this, name, definitions, Node1));
    }
    return RuleNameRule;
}(_rule.default);
exports.default = RuleNameRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9ydWxlTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBSdWxlTmFtZU5vZGUgZnJvbSBcIi4uL25vZGUvcnVsZU5hbWVcIjtcbmltcG9ydCBOYW1lRGVmaW5pdGlvbiBmcm9tIFwiLi4vZGVmaW5pdGlvbi9uYW1lXCI7XG5cbmltcG9ydCB7IFJ1bGVOYW1lUnVsZU5hbWUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVOYW1lUnVsZSBleHRlbmRzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBuYW1lRGVmaW5pdGlvbiA9IG5ldyBOYW1lRGVmaW5pdGlvbigpLFxuICAgICAgICAgIG5hbWUgPSBSdWxlTmFtZVJ1bGVOYW1lLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgbmFtZURlZmluaXRpb24gIC8vL1xuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9kZSA9IFJ1bGVOYW1lTm9kZTtcbiAgICBcbiAgICBzdXBlcihuYW1lLCBkZWZpbml0aW9ucywgTm9kZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsS0FBQTtJQUNBLFNBQUE7SUFDQSxLQUFBO0lBRUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLFlBQUEsWUFBQSxJQUFBO2NBQUEsWUFBQSxFQU5BLEtBQUE7YUFNQSxZQUFBOzhCQUFBLFlBQUE7WUFFQSxjQUFBLE9BTkEsS0FBQSxZQU9BLElBQUEsR0FMQSxVQUFBLG1CQU1BLFdBQUE7QUFDQSwwQkFBQTtXQUVBLEtBQUEsR0FaQSxTQUFBO2dFQUtBLFlBQUEsYUFTQSxJQUFBLEVBQUEsV0FBQSxFQUFBLEtBQUE7O1dBVEEsWUFBQTtFQU5BLEtBQUE7a0JBTUEsWUFBQSJ9