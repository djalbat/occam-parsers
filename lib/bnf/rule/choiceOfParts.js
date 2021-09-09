"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rule = _interopRequireDefault(require("../rule"));
var _choiceOfParts = _interopRequireDefault(require("../node/choiceOfParts"));
var _choiceOfParts1 = _interopRequireDefault(require("../definition/choiceOfParts"));
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
var ChoiceOfPartsRule = /*#__PURE__*/ function(Rule) {
    _inherits(ChoiceOfPartsRule, Rule);
    function ChoiceOfPartsRule() {
        _classCallCheck(this, ChoiceOfPartsRule);
        var name = _ruleNames.ChoiceOfPartsRuleName, choiceOfPartsDefinition = new _choiceOfParts1.default(), definitions = [
            choiceOfPartsDefinition
        ], Node = _choiceOfParts.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsRule).call(this, name, definitions, Node));
    }
    return ChoiceOfPartsRule;
}(_rule.default);
exports.default = ChoiceOfPartsRule;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvcnVsZS9jaG9pY2VPZlBhcnRzLmpzIl0sIm5hbWVzIjpbIlJ1bGUiLCJDaG9pY2VPZlBhcnRzTm9kZSIsIkNob2ljZU9mUGFydHNEZWZpbml0aW9uIiwiQ2hvaWNlT2ZQYXJ0c1J1bGVOYW1lIiwiQ2hvaWNlT2ZQYXJ0c1J1bGUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJjaG9pY2VPZlBhcnRzRGVmaW5pdGlvbiIsImRlZmluaXRpb25zIiwiTm9kZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFTLENBQVQsS0FBUztBQUNJLEdBQXVCLENBQXZCLGNBQXVCO0FBQ2pCLEdBQTZCLENBQTdCLGVBQTZCO0FBRTNCLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9CLGlCQUFpQixpQkFBdkIsUUFBUTtjQUFGLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtRQUVsQyxHQUFLLENBQUMsSUFBSSxHQUp3QixVQUFjLHdCQUsxQyx1QkFBdUIsR0FBRyxHQUFHLENBUEgsZUFBNkIsWUFRdkQsV0FBVyxHQUFHLENBQUM7WUFDYix1QkFBdUI7UUFDekIsQ0FBQyxFQUNELElBQUksR0FaZ0IsY0FBdUI7Z0VBS2hDLGlCQUFpQixhQVM1QixJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUk7O1dBVFosaUJBQWlCO0VBTnJCLEtBQVM7a0JBTUwsaUJBQWlCIn0=