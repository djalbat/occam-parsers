"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
var _regularExpression = _interopRequireDefault(require("../part/terminal/regularExpression"));
var _array = require("../../utilities/array");
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var RegularExpressionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RegularExpressionNode, NonTerminalNode);
    function RegularExpressionNode() {
        _classCallCheck(this, RegularExpressionNode);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionNode).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\/((?:\\.|[^\/])*)\/$/);
        return _this;
    }
    _createClass(RegularExpressionNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var regularExpression = this.getRegularExpression(), regularExpressionPart = new _regularExpression.default(regularExpression);
                return regularExpressionPart;
            }
        },
        {
            key: "getRegularExpression",
            value: function getRegularExpression() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), pattern = secondMatch, regularExpression = new RegExp(pattern); ///
                return regularExpression;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(RegularExpressionNode, ruleName, childNodes);
            }
        }
    ]);
    return RegularExpressionNode;
}(_nonTerminal.default);
exports.default = RegularExpressionNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJSZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlJlZ3VsYXJFeHByZXNzaW9uTm9kZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwiZ2V0UmVndWxhckV4cHJlc3Npb24iLCJyZWd1bGFyRXhwcmVzc2lvblBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInBhdHRlcm4iLCJSZWdFeHAiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWdCLEdBQStCLENBQS9CLFlBQStCO0FBQ3pCLEdBQW9DLENBQXBDLGtCQUFvQztBQUV4QyxHQUF1QixDQUF2QixNQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoQyxxQkFBcUIsaUJBQTNCLFFBQVE7Y0FBRixxQkFBcUI7YUFBckIscUJBQXFCOzhCQUFyQixxQkFBcUI7O2lFQUFyQixxQkFBcUI7dURBQ3hDLENBQWlCOzs7aUJBREUscUJBQXFCOztZQUd4QyxHQUFZLEVBQVosQ0FBWTttQkFBWixRQUFRLENBQVIsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixJQUM3QyxxQkFBcUIsR0FBRyxHQUFHLENBVEgsa0JBQW9DLFNBU1YsaUJBQWlCO2dCQUV6RSxNQUFNLENBQUMscUJBQXFCO1lBQzlCLENBQUM7OztZQUVELEdBQW9CLEVBQXBCLENBQW9CO21CQUFwQixRQUFRLENBQVIsb0JBQW9CLEdBQUcsQ0FBQztnQkFDdEIsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUMvQixjQUFjLE9BZE0sTUFBdUIsUUFjcEIsVUFBVSxHQUNqQyxZQUFZLEdBQUcsY0FBYyxFQUM3QixtQkFBbUIsR0FBRyxZQUFZLENBQUMsVUFBVSxJQUM3QyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FDMUQsV0FBVyxPQWxCUyxNQUF1QixTQWtCdEIsT0FBTyxHQUM1QixPQUFPLEdBQUcsV0FBVyxFQUNyQixpQkFBaUIsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRW5ELE1BQU0sQ0FBQyxpQkFBaUI7WUFDMUIsQ0FBQzs7OztZQUVNLEdBQXlCLEVBQXpCLENBQXlCO21CQUFoQyxRQUFRLENBQUQseUJBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0E1QnJDLFlBQStCLFNBNEJ1Qix5QkFBeUIsQ0FBQyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsVUFBVTtZQUFHLENBQUM7OztXQXZCdEkscUJBQXFCO0VBTGQsWUFBK0I7a0JBS3RDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFJlZ3VsYXJFeHByZXNzaW9uUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9yZWd1bGFyRXhwcmVzc2lvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWd1bGFyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFwvKCg/OlxcXFwufFteXFwvXSkqKVxcLyQvO1xuXG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCByZWd1bGFyRXhwcmVzc2lvbiA9IHRoaXMuZ2V0UmVndWxhckV4cHJlc3Npb24oKSxcbiAgICAgICAgICByZWd1bGFyRXhwcmVzc2lvblBhcnQgPSBuZXcgUmVndWxhckV4cHJlc3Npb25QYXJ0KHJlZ3VsYXJFeHByZXNzaW9uKTtcblxuICAgIHJldHVybiByZWd1bGFyRXhwcmVzc2lvblBhcnQ7XG4gIH1cblxuICBnZXRSZWd1bGFyRXhwcmVzc2lvbigpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHBhdHRlcm4gPSBzZWNvbmRNYXRjaCwgLy8vXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb24gPSBuZXcgUmVnRXhwKHBhdHRlcm4pOyAgLy8vXG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmVndWxhckV4cHJlc3Npb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxuIl19