"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nonTerminal = _interopRequireDefault(require("../../common/node/nonTerminal"));
var _terminalSymbol = _interopRequireDefault(require("../part/terminal/terminalSymbol"));
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
var TerminalSymbolNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TerminalSymbolNode, NonTerminalNode);
    function TerminalSymbolNode() {
        _classCallCheck(this, TerminalSymbolNode);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolNode).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^"((?:\\.|[^"\\])*)"$/);
        return _this;
    }
    _createClass(TerminalSymbolNode, [
        {
            key: "generatePart",
            value: function generatePart(lookAhead) {
                var content = this.getContent(), terminalSymbolPart = new _terminalSymbol.default(content);
                return terminalSymbolPart;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), content = secondMatch.replace(/\\\\/g, "\\").replace(/\\"/g, "\"");
                return content;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _nonTerminal.default.fromRuleNameAndChildNodes(TerminalSymbolNode, ruleName, childNodes);
            }
        }
    ]);
    return TerminalSymbolNode;
}(_nonTerminal.default);
exports.default = TerminalSymbolNode;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlRlcm1pbmFsU3ltYm9sTm9kZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwicmVwbGFjZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZ0IsR0FBK0IsQ0FBL0IsWUFBK0I7QUFDNUIsR0FBaUMsQ0FBakMsZUFBaUM7QUFFbEMsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEMsa0JBQWtCLGlCQUF4QixRQUFRO2NBQUYsa0JBQWtCO2FBQWxCLGtCQUFrQjs4QkFBbEIsa0JBQWtCOztpRUFBbEIsa0JBQWtCO3dEQUNyQyxpQkFBaUI7OztpQkFERSxrQkFBa0I7O1lBR3JDLEdBQVksR0FBWixZQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFDekIsa0JBQWtCLEdBQUcsR0FBRyxDQVRILGVBQWlDLFNBU1YsT0FBTztnQkFFekQsTUFBTSxDQUFDLGtCQUFrQjtZQUMzQixDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTttQkFBVixRQUFRLENBQVIsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxJQUMvQixjQUFjLE9BZE0sTUFBdUIsUUFjcEIsVUFBVSxHQUNqQyxZQUFZLEdBQUcsY0FBYyxFQUM3QixtQkFBbUIsR0FBRyxZQUFZLENBQUMsVUFBVSxJQUM3QyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FDMUQsV0FBVyxPQWxCUyxNQUF1QixTQWtCdEIsT0FBTyxHQUM1QixPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sV0FBVSxFQUFJLEdBQUUsT0FBTyxVQUFTLEVBQUk7Z0JBRXZFLE1BQU0sQ0FBQyxPQUFPO1lBQ2hCLENBQUM7Ozs7WUFFTSxHQUF5QixHQUF6Qix5QkFBeUI7bUJBQWhDLFFBQVEsQ0FBRCx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQUMsTUFBTSxDQTNCckMsWUFBK0IsU0EyQnVCLHlCQUF5QixDQUFDLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxVQUFVO1lBQUcsQ0FBQzs7O1dBdEJuSSxrQkFBa0I7RUFMWCxZQUErQjtrQkFLdEMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9ub2RlL25vblRlcm1pbmFsXCI7XG5pbXBvcnQgVGVybWluYWxTeW1ib2xQYXJ0IGZyb20gXCIuLi9wYXJ0L3Rlcm1pbmFsL3Rlcm1pbmFsU3ltYm9sXCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmFsU3ltYm9sTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIHJlZ3VsYXJFeHByZXNzaW9uID0gL15cIigoPzpcXFxcLnxbXlwiXFxcXF0pKilcIiQvO1xuXG4gIGdlbmVyYXRlUGFydChsb29rQWhlYWQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdGVybWluYWxTeW1ib2xQYXJ0ID0gbmV3IFRlcm1pbmFsU3ltYm9sUGFydChjb250ZW50KTtcblxuICAgIHJldHVybiB0ZXJtaW5hbFN5bWJvbFBhcnQ7XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSB0aGlzLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdENoaWxkTm9kZSA9IGZpcnN0KGNoaWxkTm9kZXMpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IGZpcnN0Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUNvbnRlbnQubWF0Y2godGhpcy5yZWd1bGFyRXhwcmVzc2lvbiksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgY29udGVudCA9IHNlY29uZE1hdGNoLnJlcGxhY2UoL1xcXFxcXFxcL2csIFwiXFxcXFwiKS5yZXBsYWNlKC9cXFxcXCIvZywgXCJcXFwiXCIpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhydWxlTmFtZSwgY2hpbGROb2RlcykgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoVGVybWluYWxTeW1ib2xOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cbn1cblxuIl19