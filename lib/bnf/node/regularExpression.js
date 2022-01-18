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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var RegularExpressionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RegularExpressionNode, NonTerminalNode);
    var _super = _createSuper(RegularExpressionNode);
    function RegularExpressionNode() {
        _classCallCheck(this, RegularExpressionNode);
        var _this;
        _this = _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9yZWd1bGFyRXhwcmVzc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBSZWd1bGFyRXhwcmVzc2lvblBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvcmVndWxhckV4cHJlc3Npb25cIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVndWxhckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgcmVndWxhckV4cHJlc3Npb24gPSAvXlxcLygoPzpcXFxcLnxbXlxcL10pKilcXC8kLztcblxuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgcmVndWxhckV4cHJlc3Npb24gPSB0aGlzLmdldFJlZ3VsYXJFeHByZXNzaW9uKCksXG4gICAgICAgICAgcmVndWxhckV4cHJlc3Npb25QYXJ0ID0gbmV3IFJlZ3VsYXJFeHByZXNzaW9uUGFydChyZWd1bGFyRXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gcmVndWxhckV4cHJlc3Npb25QYXJ0O1xuICB9XG5cbiAgZ2V0UmVndWxhckV4cHJlc3Npb24oKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBwYXR0ZXJuID0gc2Vjb25kTWF0Y2gsIC8vL1xuICAgICAgICAgIHJlZ3VsYXJFeHByZXNzaW9uID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTsgIC8vL1xuXG4gICAgcmV0dXJuIHJlZ3VsYXJFeHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFJlZ3VsYXJFeHByZXNzaW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbiJdLCJuYW1lcyI6WyJSZWd1bGFyRXhwcmVzc2lvbk5vZGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsImdldFJlZ3VsYXJFeHByZXNzaW9uIiwicmVndWxhckV4cHJlc3Npb25QYXJ0IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJmaXJzdENoaWxkTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJwYXR0ZXJuIiwiUmVnRXhwIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVnQixHQUErQixDQUEvQixZQUErQjtBQUN6QixHQUFvQyxDQUFwQyxrQkFBb0M7QUFFeEMsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDQSxxQkFBcUIsaUJBQTNCLFFBQVE7Y0FBRkEscUJBQXFCOzhCQUFyQkEscUJBQXFCO2FBQXJCQSxxQkFBcUI7OEJBQXJCQSxxQkFBcUI7Ozt1REFDeENDLENBQWlCOzs7aUJBREVELHFCQUFxQjs7WUFHeENFLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLENBQUNDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUNGLGlCQUFpQixHQUFHLElBQUksQ0FBQ0csb0JBQW9CLElBQzdDQyxxQkFBcUIsR0FBRyxHQUFHLENBVEgsa0JBQW9DLFNBU1ZKLGlCQUFpQjtnQkFFekUsTUFBTSxDQUFDSSxxQkFBcUI7WUFDOUIsQ0FBQzs7O1lBRURELEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLEdBQUcsQ0FBQztnQkFDdEIsR0FBSyxDQUFDRSxVQUFVLEdBQUcsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxjQUFjLE9BZE0sTUFBdUIsUUFjcEJGLFVBQVUsR0FDakNHLFlBQVksR0FBR0QsY0FBYyxFQUM3QkUsbUJBQW1CLEdBQUdELFlBQVksQ0FBQ0UsVUFBVSxJQUM3Q0MsT0FBTyxHQUFHRixtQkFBbUIsQ0FBQ0csS0FBSyxDQUFDLElBQUksQ0FBQ1osaUJBQWlCLEdBQzFEYSxXQUFXLE9BbEJTLE1BQXVCLFNBa0J0QkYsT0FBTyxHQUM1QkcsT0FBTyxHQUFHRCxXQUFXLEVBQ3JCYixpQkFBaUIsR0FBRyxHQUFHLENBQUNlLE1BQU0sQ0FBQ0QsT0FBTyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFbkQsTUFBTSxDQUFDZCxpQkFBaUI7WUFDMUIsQ0FBQzs7OztZQUVNZ0IsR0FBeUIsRUFBekJBLENBQXlCO21CQUFoQyxRQUFRLENBQURBLHlCQUF5QixDQUFDQyxRQUFRLEVBQUVaLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0E1QnJDLFlBQStCLFNBNEJ1QlcseUJBQXlCLENBQUNqQixxQkFBcUIsRUFBRWtCLFFBQVEsRUFBRVosVUFBVTtZQUFHLENBQUM7OztXQXZCdElOLHFCQUFxQjtFQUxkLFlBQStCO2tCQUt0Q0EscUJBQXFCIn0=