"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
var _sequenceOfParts = _interopRequireDefault(require("../part/nonTerminal/sequenceOfParts"));
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
var SequenceOfPartsNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(SequenceOfPartsNode, NonTerminalNode);
    function SequenceOfPartsNode() {
        _classCallCheck(this, SequenceOfPartsNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsNode).apply(this, arguments));
    }
    _createClass(SequenceOfPartsNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = _sequenceOfParts.default.fromNodes(nodes);
                return part;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(SequenceOfPartsNode, ruleName, childNodes);
            }
        }
    ]);
    return SequenceOfPartsNode;
}(_nonTerminal.default);
exports.default = SequenceOfPartsNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9zZXF1ZW5jZU9mUGFydHMuanMiXSwibmFtZXMiOlsiTm9uVGVybWluYWxOb2RlIiwiU2VxdWVuY2VPZlBhcnRzUGFydCIsIlNlcXVlbmNlT2ZQYXJ0c05vZGUiLCJnZW5lcmF0ZVBhcnQiLCJsb29rQWhlYWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwic2xpY2UiLCJwYXJ0IiwiZnJvbU5vZGVzIiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVnQixHQUErQixDQUEvQixZQUErQjtBQUMzQixHQUFxQyxDQUFyQyxnQkFBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoRCxtQkFBbUIsaUJBQXpCLFFBQVE7Y0FBRixtQkFBbUI7YUFBbkIsbUJBQW1COzhCQUFuQixtQkFBbUI7Z0VBQW5CLG1CQUFtQjs7aUJBQW5CLG1CQUFtQjs7WUFDdEMsR0FBWSxHQUFaLFlBQVk7bUJBQVosUUFBUSxDQUFSLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUMvQixLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssSUFDeEIsSUFBSSxHQU5rQixnQkFBcUMsU0FNaEMsU0FBUyxDQUFDLEtBQUs7Z0JBRWhELE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQzs7OztZQUVNLEdBQXlCLEdBQXpCLHlCQUF5QjttQkFBaEMsUUFBUSxDQUFELHlCQUF5QixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBWnJDLFlBQStCLFNBWXVCLHlCQUF5QixDQUFDLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxVQUFVO1lBQUcsQ0FBQzs7O1dBVHBJLG1CQUFtQjtFQUhaLFlBQStCO2tCQUd0QyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBTZXF1ZW5jZU9mUGFydHNQYXJ0IGZyb20gXCIuLi9wYXJ0L25vblRlcm1pbmFsL3NlcXVlbmNlT2ZQYXJ0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXF1ZW5jZU9mUGFydHNOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMuc2xpY2UoKSxcbiAgICAgICAgICBwYXJ0ID0gU2VxdWVuY2VPZlBhcnRzUGFydC5mcm9tTm9kZXMobm9kZXMpO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoU2VxdWVuY2VPZlBhcnRzTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG4iXX0=