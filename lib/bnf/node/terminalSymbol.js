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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJuYW1lcyI6WyJOb25UZXJtaW5hbE5vZGUiLCJUZXJtaW5hbFN5bWJvbFBhcnQiLCJmaXJzdCIsInNlY29uZCIsIlRlcm1pbmFsU3ltYm9sTm9kZSIsInJlZ3VsYXJFeHByZXNzaW9uIiwiZ2VuZXJhdGVQYXJ0IiwibG9va0FoZWFkIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0ZXJtaW5hbFN5bWJvbFBhcnQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImZpcnN0Q2hpbGROb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwicmVwbGFjZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBK0IsQ0FBL0IsWUFBK0I7QUFDNUIsR0FBaUMsQ0FBakMsZUFBaUM7QUFFbEMsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEMsa0JBQWtCLGlCQUF4QixRQUFRO2NBQUYsa0JBQWtCO2FBQWxCLGtCQUFrQjs4QkFBbEIsa0JBQWtCOztpRUFBbEIsa0JBQWtCO3VEQUNyQyxDQUFpQjs7O2lCQURFLGtCQUFrQjs7WUFHckMsR0FBWSxFQUFaLENBQVk7bUJBQVosUUFBUSxDQUFSLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsR0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUN6QixrQkFBa0IsR0FBRyxHQUFHLENBVEgsZUFBaUMsU0FTVixPQUFPO2dCQUV6RCxNQUFNLENBQUMsa0JBQWtCO1lBQzNCLENBQUM7OztZQUVELEdBQVUsRUFBVixDQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQy9CLGNBQWMsT0FkTSxNQUF1QixRQWNwQixVQUFVLEdBQ2pDLFlBQVksR0FBRyxjQUFjLEVBQzdCLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxVQUFVLElBQzdDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUMxRCxXQUFXLE9BbEJTLE1BQXVCLFNBa0J0QixPQUFPLEdBQzVCLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxVQUFVLENBQUksS0FBRSxPQUFPLFNBQVMsQ0FBSTtnQkFFdkUsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7OztZQUVNLEdBQXlCLEVBQXpCLENBQXlCO21CQUFoQyxRQUFRLENBQUQseUJBQXlCLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0EzQnJDLFlBQStCLFNBMkJ1Qix5QkFBeUIsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsVUFBVTtZQUFHLENBQUM7OztXQXRCbkksa0JBQWtCO0VBTFgsWUFBK0I7a0JBS3RDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi8uLi9jb21tb24vbm9kZS9ub25UZXJtaW5hbFwiO1xuaW1wb3J0IFRlcm1pbmFsU3ltYm9sUGFydCBmcm9tIFwiLi4vcGFydC90ZXJtaW5hbC90ZXJtaW5hbFN5bWJvbFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hbFN5bWJvbE5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICByZWd1bGFyRXhwcmVzc2lvbiA9IC9eXCIoKD86XFxcXC58W15cIlxcXFxdKSopXCIkLztcblxuICBnZW5lcmF0ZVBhcnQobG9va0FoZWFkKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRlcm1pbmFsU3ltYm9sUGFydCA9IG5ldyBUZXJtaW5hbFN5bWJvbFBhcnQoY29udGVudCk7XG5cbiAgICByZXR1cm4gdGVybWluYWxTeW1ib2xQYXJ0O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgZmlyc3RDaGlsZE5vZGUgPSBmaXJzdChjaGlsZE5vZGVzKSxcbiAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBmaXJzdENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVDb250ZW50Lm1hdGNoKHRoaXMucmVndWxhckV4cHJlc3Npb24pLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIGNvbnRlbnQgPSBzZWNvbmRNYXRjaC5yZXBsYWNlKC9cXFxcXFxcXC9nLCBcIlxcXFxcIikucmVwbGFjZSgvXFxcXFwiL2csIFwiXFxcIlwiKTtcblxuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMocnVsZU5hbWUsIGNoaWxkTm9kZXMpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKFRlcm1pbmFsU3ltYm9sTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMpOyB9XG59XG5cbiJdfQ==