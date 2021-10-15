"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
var _noWhitespace = _interopRequireDefault(require("../part/terminal/noWhitespace"));
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
var NoWhitespacePartNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(NoWhitespacePartNode, NonTerminalNode);
    function NoWhitespacePartNode() {
        _classCallCheck(this, NoWhitespacePartNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartNode).apply(this, arguments));
    }
    _createClass(NoWhitespacePartNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var noWhitespacePart = new _noWhitespace.default();
                return noWhitespacePart;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(NoWhitespacePartNode, ruleName, childNodes);
            }
        }
    ]);
    return NoWhitespacePartNode;
}(_nonTerminal.default);
exports.default = NoWhitespacePartNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsTm9kZSIsIk5vV2hpdGVzcGFjZVBhcnQiLCJOb1doaXRlc3BhY2VQYXJ0Tm9kZSIsImdlbmVyYXRlUGFydCIsImxvb2tBaGVhZCIsIm5vV2hpdGVzcGFjZVBhcnQiLCJmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJjaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVnQixHQUErQixDQUEvQixZQUErQjtBQUM5QixHQUErQixDQUEvQixhQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZDLG9CQUFvQixpQkFBMUIsUUFBUTtjQUFGLG9CQUFvQjthQUFwQixvQkFBb0I7OEJBQXBCLG9CQUFvQjtnRUFBcEIsb0JBQW9COztpQkFBcEIsb0JBQW9COztZQUN2QyxHQUFZLEVBQVosQ0FBWTttQkFBWixRQUFRLENBQVIsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUpILGFBQStCO2dCQU14RCxNQUFNLENBQUMsZ0JBQWdCO1lBQ3pCLENBQUM7Ozs7WUFFTSxHQUF5QixFQUF6QixDQUF5QjttQkFBaEMsUUFBUSxDQUFELHlCQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBVnJDLFlBQStCLFNBVXVCLHlCQUF5QixDQUFDLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxVQUFVO1lBQUcsQ0FBQzs7O1dBUHJJLG9CQUFvQjtFQUhiLFlBQStCO2tCQUd0QyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBOb1doaXRlc3BhY2VQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL25vV2hpdGVzcGFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb1doaXRlc3BhY2VQYXJ0Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBub1doaXRlc3BhY2VQYXJ0ID0gbmV3IE5vV2hpdGVzcGFjZVBhcnQoKTtcblxuICAgIHJldHVybiBub1doaXRlc3BhY2VQYXJ0O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKE5vV2hpdGVzcGFjZVBhcnROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiJdfQ==