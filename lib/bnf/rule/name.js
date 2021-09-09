"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _name = _interopRequireDefault(require("../node/name"));
var _name1 = _interopRequireDefault(require("../definition/name"));
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
var NameRule = /*#__PURE__*/ function(Rule) {
    _inherits(NameRule, Rule);
    function NameRule() {
        _classCallCheck(this, NameRule);
        var nameDefinition = new _name1.default(), name = _ruleNames.NameRuleName, definitions = [
            nameDefinition
        ], Node = _name.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(NameRule).call(this, name, definitions, Node));
    }
    return NameRule;
}(_rule.default);
exports.default = NameRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9uYW1lLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJOYW1lTm9kZSIsIk5hbWVEZWZpbml0aW9uIiwiTmFtZVJ1bGVOYW1lIiwiTmFtZVJ1bGUiLCJjb25zdHJ1Y3RvciIsIm5hbWVEZWZpbml0aW9uIiwibmFtZSIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNMLEdBQWMsQ0FBZCxLQUFjO0FBQ1IsR0FBb0IsQ0FBcEIsTUFBb0I7QUFFbEIsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEIsUUFBUSxpQkFBZCxRQUFRO2NBQUYsUUFBUTthQUFSLFFBQVE7OEJBQVIsUUFBUTtRQUV6QixHQUFLLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FOSCxNQUFvQixZQU9yQyxJQUFJLEdBTGUsVUFBYyxlQU1qQyxXQUFXLEdBQUcsQ0FBQztZQUNiLGNBQWM7UUFDaEIsQ0FBQyxFQUNELElBQUksR0FaTyxLQUFjO2dFQUtkLFFBQVEsYUFTbkIsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJOztXQVRaLFFBQVE7RUFOWixLQUFTO2tCQU1MLFFBQVEifQ==