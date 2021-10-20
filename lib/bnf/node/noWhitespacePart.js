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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9ub1doaXRlc3BhY2VQYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IE5vV2hpdGVzcGFjZVBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvbm9XaGl0ZXNwYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vV2hpdGVzcGFjZVBhcnROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IG5vV2hpdGVzcGFjZVBhcnQgPSBuZXcgTm9XaGl0ZXNwYWNlUGFydCgpO1xuXG4gICAgcmV0dXJuIG5vV2hpdGVzcGFjZVBhcnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoTm9XaGl0ZXNwYWNlUGFydE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuIl0sIm5hbWVzIjpbIk5vV2hpdGVzcGFjZVBhcnROb2RlIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwibm9XaGl0ZXNwYWNlUGFydCIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWdCLEdBQStCLENBQS9CLFlBQStCO0FBQzlCLEdBQStCLENBQS9CLGFBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkNBLG9CQUFvQixpQkFBMUIsUUFBUTtjQUFGQSxvQkFBb0I7YUFBcEJBLG9CQUFvQjs4QkFBcEJBLG9CQUFvQjtnRUFBcEJBLG9CQUFvQjs7aUJBQXBCQSxvQkFBb0I7O1lBQ3ZDQyxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxDQUFDQyxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBRyxHQUFHLENBSkgsYUFBK0I7Z0JBTXhELE1BQU0sQ0FBQ0EsZ0JBQWdCO1lBQ3pCLENBQUM7Ozs7WUFFTUMsR0FBeUIsRUFBekJBLENBQXlCO21CQUFoQyxRQUFRLENBQURBLHlCQUF5QixDQUFDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FWckMsWUFBK0IsU0FVdUJGLHlCQUF5QixDQUFDSixvQkFBb0IsRUFBRUssUUFBUSxFQUFFQyxVQUFVO1lBQUcsQ0FBQzs7O1dBUHJJTixvQkFBb0I7RUFIYixZQUErQjtrQkFHdENBLG9CQUFvQiJ9