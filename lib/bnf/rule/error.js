"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _error = _interopRequireDefault(require("../node/error"));
var _error1 = _interopRequireDefault(require("../definition/error"));
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
var ErrorRule = /*#__PURE__*/ function(Rule) {
    _inherits(ErrorRule, Rule);
    function ErrorRule() {
        _classCallCheck(this, ErrorRule);
        var errorDefinition = new _error1.default(), name = _ruleNames.ErrorRuleName, definitions = [
            errorDefinition
        ], Node = _error.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(ErrorRule).call(this, name, definitions, Node));
    }
    return ErrorRule;
}(_rule.default);
exports.default = ErrorRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9lcnJvci5qcyJdLCJuYW1lcyI6WyJSdWxlIiwiRXJyb3JOb2RlIiwiRXJyb3JEZWZpbml0aW9uIiwiRXJyb3JSdWxlTmFtZSIsIkVycm9yUnVsZSIsImNvbnN0cnVjdG9yIiwiZXJyb3JEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNKLEdBQWUsQ0FBZixNQUFlO0FBQ1QsR0FBcUIsQ0FBckIsT0FBcUI7QUFFbkIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsU0FBUyxpQkFBZixRQUFRO2NBQUYsU0FBUzthQUFULFNBQVM7OEJBQVQsU0FBUztRQUUxQixHQUFLLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FOSCxPQUFxQixZQU92QyxJQUFJLEdBTGdCLFVBQWMsZ0JBTWxDLFdBQVcsR0FBRyxDQUFDO1lBQ2IsZUFBZTtRQUNqQixDQUFDLEVBQ0QsSUFBSSxHQVpRLE1BQWU7Z0VBS2hCLFNBQVMsYUFTcEIsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVRaLFNBQVM7RUFOYixLQUFTO2tCQU1MLFNBQVMifQ==