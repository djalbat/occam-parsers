"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _wildcard = _interopRequireDefault(require("../part/terminal/wildcard"));
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
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
var WildcardNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(WildcardNode, NonTerminalNode);
    function WildcardNode() {
        _classCallCheck(this, WildcardNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(WildcardNode).apply(this, arguments));
    }
    _createClass(WildcardNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var wildcardPart = new _wildcard.default();
                return wildcardPart;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(WildcardNode, ruleName, childNodes);
            }
        }
    ]);
    return WildcardNode;
}(_nonTerminal.default);
exports.default = WildcardNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS93aWxkY2FyZC5qcyJdLCJuYW1lcyI6WyJXaWxkY2FyZFBhcnQiLCJOb25UZXJtaW5hbE5vZGUiLCJXaWxkY2FyZE5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJsb29rQWhlYWQiLCJ3aWxkY2FyZFBhcnQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQTJCLENBQTNCLFNBQTJCO0FBQ3hCLEdBQStCLENBQS9CLFlBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEMsWUFBWSxpQkFBbEIsUUFBUTtjQUFGLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7aUJBQVosWUFBWTs7WUFDL0IsR0FBWSxFQUFaLENBQVk7bUJBQVosUUFBUSxDQUFSLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsR0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLENBTEgsU0FBMkI7Z0JBT2hELE1BQU0sQ0FBQyxZQUFZO1lBQ3JCLENBQUM7Ozs7WUFFTSxHQUF5QixFQUF6QixDQUF5QjttQkFBaEMsUUFBUSxDQUFELHlCQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBVHJDLFlBQStCLFNBU3VCLHlCQUF5QixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsVUFBVTtZQUFHLENBQUM7OztXQVA3SCxZQUFZO0VBRkwsWUFBK0I7a0JBRXRDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFdpbGRjYXJkUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC93aWxkY2FyZFwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lsZGNhcmROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IHdpbGRjYXJkUGFydCA9IG5ldyBXaWxkY2FyZFBhcnQoKTtcblxuICAgIHJldHVybiB3aWxkY2FyZFBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoV2lsZGNhcmROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiJdfQ==