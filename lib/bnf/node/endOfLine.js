"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _endOfLine = _interopRequireDefault(require("../part/terminal/endOfLine"));
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
var EndOfLineNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(EndOfLineNode, NonTerminalNode);
    function EndOfLineNode() {
        _classCallCheck(this, EndOfLineNode);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNode).apply(this, arguments));
    }
    _createClass(EndOfLineNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var endOfLinePart = new _endOfLine.default();
                return endOfLinePart;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(EndOfLineNode, ruleName, childNodes);
            }
        }
    ]);
    return EndOfLineNode;
}(_nonTerminal.default);
exports.default = EndOfLineNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS9lbmRPZkxpbmUuanMiXSwibmFtZXMiOlsiRW5kT2ZMaW5lUGFydCIsIk5vblRlcm1pbmFsTm9kZSIsIkVuZE9mTGluZU5vZGUiLCJnZW5lcmF0ZVBhcnQiLCJsb29rQWhlYWQiLCJlbmRPZkxpbmVQYXJ0IiwiZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFYyxHQUE0QixDQUE1QixVQUE0QjtBQUMxQixHQUErQixDQUEvQixZQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRDLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRixhQUFhO2FBQWIsYUFBYTs4QkFBYixhQUFhO2dFQUFiLGFBQWE7O2lCQUFiLGFBQWE7O1lBQ2hDLEdBQVksR0FBWixZQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUxILFVBQTRCO2dCQU9sRCxNQUFNLENBQUMsYUFBYTtZQUN0QixDQUFDOzs7O1lBRU0sR0FBeUIsR0FBekIseUJBQXlCO21CQUFoQyxRQUFRLENBQUQseUJBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FUckMsWUFBK0IsU0FTdUIseUJBQXlCLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxVQUFVO1lBQUcsQ0FBQzs7O1dBUDlILGFBQWE7RUFGTixZQUErQjtrQkFFdEMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRW5kT2ZMaW5lUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC9lbmRPZkxpbmVcIjtcbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZE9mTGluZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgZW5kT2ZMaW5lUGFydCA9IG5ldyBFbmRPZkxpbmVQYXJ0KCk7XG5cbiAgICByZXR1cm4gZW5kT2ZMaW5lUGFydDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhFbmRPZkxpbmVOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cbiJdfQ==