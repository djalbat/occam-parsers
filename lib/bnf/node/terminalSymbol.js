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
var TerminalSymbolNode = function(NonTerminalNode) {
    _inherits(TerminalSymbolNode, _nonTerminal.default);
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
                var childNodes = this.getChildNodes(), firstChildNode = _array.first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = _array.second(matches), content = secondMatch.replace(/\\\\/g, "\\").replace(/\\"/g, "\"");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ibmYvbm9kZS90ZXJtaW5hbFN5bWJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vLi4vY29tbW9uL25vZGUvbm9uVGVybWluYWxcIjtcbmltcG9ydCBUZXJtaW5hbFN5bWJvbFBhcnQgZnJvbSBcIi4uL3BhcnQvdGVybWluYWwvdGVybWluYWxTeW1ib2xcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybWluYWxTeW1ib2xOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgcmVndWxhckV4cHJlc3Npb24gPSAvXlwiKCg/OlxcXFwufFteXCJcXFxcXSkqKVwiJC87XG5cbiAgZ2VuZXJhdGVQYXJ0KGxvb2tBaGVhZCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0ZXJtaW5hbFN5bWJvbFBhcnQgPSBuZXcgVGVybWluYWxTeW1ib2xQYXJ0KGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHRlcm1pbmFsU3ltYm9sUGFydDtcbiAgfVxuXG4gIGdldENvbnRlbnQoKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IHRoaXMuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gZmlyc3RDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGVybWluYWxOb2RlQ29udGVudC5tYXRjaCh0aGlzLnJlZ3VsYXJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICBjb250ZW50ID0gc2Vjb25kTWF0Y2gucmVwbGFjZSgvXFxcXFxcXFwvZywgXCJcXFxcXCIpLnJlcGxhY2UoL1xcXFxcIi9nLCBcIlxcXCJcIik7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhUZXJtaW5hbFN5bWJvbE5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTsgfVxufVxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxZQUFBO0lBQ0EsZUFBQTtJQUVBLE1BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxrQkFBQSxZQUFBLGVBQUE7Y0FBQSxrQkFBQSxFQUxBLFlBQUE7YUFLQSxrQkFBQTs4QkFBQSxrQkFBQTs7aUVBQUEsa0JBQUE7d0RBQ0EsaUJBQUE7OztpQkFEQSxrQkFBQTs7QUFHQSxlQUFBLEdBQUEsWUFBQTs0QkFBQSxZQUFBLENBQUEsU0FBQTtvQkFDQSxPQUFBLFFBQUEsVUFBQSxJQUNBLGtCQUFBLE9BVEEsZUFBQSxTQVNBLE9BQUE7dUJBRUEsa0JBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsVUFBQTs0QkFBQSxVQUFBO29CQUNBLFVBQUEsUUFBQSxhQUFBLElBQ0EsY0FBQSxHQWRBLE1BQUEsT0FjQSxVQUFBLEdBQ0EsWUFBQSxHQUFBLGNBQUEsRUFDQSxtQkFBQSxHQUFBLFlBQUEsQ0FBQSxVQUFBLElBQ0EsT0FBQSxHQUFBLG1CQUFBLENBQUEsS0FBQSxNQUFBLGlCQUFBLEdBQ0EsV0FBQSxHQWxCQSxNQUFBLFFBa0JBLE9BQUEsR0FDQSxPQUFBLEdBQUEsV0FBQSxDQUFBLE9BQUEsV0FBQSxFQUFBLEdBQUEsT0FBQSxVQUFBLEVBQUE7dUJBRUEsT0FBQTs7Ozs7QUFHQSxlQUFBLEdBQUEseUJBQUE7NEJBQUEseUJBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTt1QkEzQkEsWUFBQSxTQTJCQSx5QkFBQSxDQUFBLGtCQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUE7Ozs7V0F0QkEsa0JBQUE7RUFMQSxZQUFBO2tCQUtBLGtCQUFBIn0=