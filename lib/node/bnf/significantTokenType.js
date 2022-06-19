"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../node/nonTerminal"));
var _significantTokenType = _interopRequireDefault(require("../../part/terminal/significantTokenType"));
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
var SignificantTokenTypeBNFNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SignificantTokenTypeBNFNode, NonTerminalNode);
    var _super = _createSuper(SignificantTokenTypeBNFNode);
    function SignificantTokenTypeBNFNode() {
        _classCallCheck(this, SignificantTokenTypeBNFNode);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\[([^\]]+)]$/);
        return _this;
    }
    _createClass(SignificantTokenTypeBNFNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var significantTokenType = this.getSignificantTokenType(), significantTokenTypePart = new _significantTokenType.default(significantTokenType);
                return significantTokenTypePart;
            }
        },
        {
            key: "getSignificantTokenType",
            value: function getSignificantTokenType() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), significantTokenType = secondMatch; ///
                return significantTokenType;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(SignificantTokenTypeBNFNode, ruleName, childNodes);
            }
        }
    ]);
    return SignificantTokenTypeBNFNode;
}(_nonTerminal.default);
module.exports = SignificantTokenTypeBNFNode;
exports.default = SignificantTokenTypeBNFNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JuZi9zaWduaWZpY2FudFRva2VuVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFNpZ25pZmljYW50VG9rZW5UeXBlUGFydCBmcm9tIFwiLi4vLi4vcGFydC90ZXJtaW5hbC9zaWduaWZpY2FudFRva2VuVHlwZVwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaWZpY2FudFRva2VuVHlwZUJORk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXFxbKFteXFxdXSspXSQvO1xuXG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuVHlwZSA9IHRoaXMuZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUoKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQgPSBuZXcgU2lnbmlmaWNhbnRUb2tlblR5cGVQYXJ0KHNpZ25pZmljYW50VG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuVHlwZVBhcnQ7XG4gIH1cblxuICBnZXRTaWduaWZpY2FudFRva2VuVHlwZSgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gICAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFNpZ25pZmljYW50VG9rZW5UeXBlQk5GTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlblR5cGVCTkZOb2RlO1xuXG5cbiJdLCJuYW1lcyI6WyJTaWduaWZpY2FudFRva2VuVHlwZUJORk5vZGUiLCJyZWd1bGFyRXhwcmVzc2lvbiIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0U2lnbmlmaWNhbnRUb2tlblR5cGUiLCJzaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJTaWduaWZpY2FudFRva2VuVHlwZVBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwiZmlyc3QiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiTm9uVGVybWluYWxOb2RlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVlLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBQ2YsSUFBQSxxQkFBMEMsa0NBQTFDLDBDQUEwQyxFQUFBO0FBRWpELElBQUEsTUFBdUIsV0FBdkIsdUJBQXVCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsMkJBQTJCLGlCQXlCN0MsQUF6Qlk7OzthQUFNQSwyQkFBMkI7Ozs7UUFDOUNDLCtDQUFBQSxtQkFBaUIsa0JBQW1CLENBQUE7Ozs7O1lBRXBDQyxHQUFZLEVBQVpBLGNBQVk7bUJBQVpBLFNBQUFBLFlBQVksQ0FBQ0MsU0FBUyxFQUFFO2dCQUN0QixJQUFNQyxvQkFBb0IsR0FBRyxJQUFJLENBQUNDLHVCQUF1QixFQUFFLEVBQ3JEQyx3QkFBd0IsR0FBRyxJQUFJQyxxQkFBd0IsUUFBQSxDQUFDSCxvQkFBb0IsQ0FBQyxBQUFDO2dCQUVwRixPQUFPRSx3QkFBd0IsQ0FBQzthQUNqQzs7O1lBRURELEdBQXVCLEVBQXZCQSx5QkFBdUI7bUJBQXZCQSxTQUFBQSx1QkFBdUIsR0FBRztnQkFDeEIsSUFBTUcsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFLEVBQ2pDQyxjQUFjLEdBQUdDLENBQUFBLEdBQUFBLE1BQUssQUFBWSxDQUFBLE1BQVosQ0FBQ0gsVUFBVSxDQUFDLEVBQ2xDSSxZQUFZLEdBQUdGLGNBQWMsRUFDN0JHLG1CQUFtQixHQUFHRCxZQUFZLENBQUNFLFVBQVUsRUFBRSxFQUMvQ0MsT0FBTyxHQUFHRixtQkFBbUIsQ0FBQ0csS0FBSyxDQUFDLElBQUksQ0FBQ2YsaUJBQWlCLENBQUMsRUFDM0RnQixXQUFXLEdBQUdDLENBQUFBLEdBQUFBLE1BQU0sQUFBUyxDQUFBLE9BQVQsQ0FBQ0gsT0FBTyxDQUFDLEVBQzdCWCxvQkFBb0IsR0FBR2EsV0FBVyxBQUFDLEVBQUMsR0FBRztnQkFFN0MsT0FBT2Isb0JBQW9CLENBQUM7YUFDN0I7Ozs7WUFFTWUsR0FBeUIsRUFBekJBLDJCQUF5QjttQkFBaEMsU0FBT0EseUJBQXlCLENBQUNDLFFBQVEsRUFBRVosVUFBVSxFQUFFO2dCQUFFLE9BQU9hLFlBQWUsUUFBQSxDQUFDRix5QkFBeUIsQ0FBQ25CLDJCQUEyQixFQUFFb0IsUUFBUSxFQUFFWixVQUFVLENBQUMsQ0FBQzthQUFFOzs7O0NBQ2hLLENBdkJ3RGEsWUFBZSxRQUFBLENBdUJ2RTtBQUVEQyxNQUFNLENBQUNDLE9BQU8sR0FBR3ZCLDJCQUEyQixDQUFDO2tCQXpCeEJBLDJCQUEyQiJ9